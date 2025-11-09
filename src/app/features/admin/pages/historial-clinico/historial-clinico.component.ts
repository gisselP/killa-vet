import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HistorialClinico } from '../../../client/interfaces/response/historial.interface';
import { Mascota } from '../../../client/interfaces/response/mascota.interface';
import { MascotasService } from '../../../../core/services/mascotas.service';
import { HistorialService } from '../../../../core/services/historial.service';

@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrl: './historial-clinico.component.scss',
  standalone: false,
})
export class HistorialClinicoComponent {
  agregarHistorialForm: FormGroup;
  mascotas: Mascota[] = [];
  filtradas: Mascota[] = [];
  mascotaSeleccionada!: Mascota | null;
  historialporMascota: HistorialClinico[] = [];
  historialFiltrada: HistorialClinico[] = [];

  constructor(
    private mascotasService: MascotasService, 
    private historialService: HistorialService)
  {
    this.agregarHistorialForm = new FormGroup({
      fechaConsulta: new FormControl('', Validators.required),
      diagnostico: new FormControl('', Validators.required),
      tratamiento: new FormControl('', Validators.required),
      medicamentos: new FormControl('', Validators.required),
      peso: new FormControl(null, Validators.required),
      temperatura: new FormControl(null, Validators.required),
      observaciones: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.obtenerMascota();
  }

  seleccionarMascota(mascota: Mascota): void {
    this.mascotaSeleccionada = mascota; 
    this.obtenerHistorial()
    this.historialFiltrada = this.historialporMascota.filter(
        (h) => h.mascotaId === mascota.id
      );
  }

  obtenerMascota(): void {
    this.mascotasService.obtenerTodasMascotas().subscribe({
      next: (data) => {
        this.mascotas = data;
        this.filtradas = data;
      },
      error: (err) => console.error('Error al cargar mascotas', err),
    });
  }
  
  obtenerHistorial(): void{
    this.historialService.obtenerTodoHistorial().subscribe({
      next: (data) => {
        this.historialporMascota = data;        
      },
    })
  }

  onBuscar(event: Event): void {
    const valor = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (!valor) {
      this.filtradas = this.mascotas;
    } else {
      this.filtradas = this.mascotasService.buscarPorNombre(valor);
    }
  }
}
