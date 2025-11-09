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
      veterinarioId: new FormControl(null, Validators.required),
      fechaConsulta: new FormControl('', Validators.required),
      diagnostico: new FormControl('', Validators.required),
      tratamiento: new FormControl('', Validators.required),
      medicamentos: new FormControl(''),
      peso: new FormControl(null, Validators.required),
      temperatura: new FormControl(null),
      observaciones: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.obtenerMascota();
    this.obtenerHistorial();
  }

  seleccionarMascota(mascota: Mascota): void {
    this.mascotaSeleccionada = mascota; 
    console.log(mascota);
    
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
  
  obtenerHistorial(): void {
    this.historialService.obtenerTodoHistorial().subscribe({
      next: (data) => {
        this.historialporMascota = data;        
      },
      error: (err) => console.error('Error al cargar historial', err),
    });
  }

  onBuscar(event: Event): void {
    const valor = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (!valor) {
      this.filtradas = this.mascotas;
    } else {
      this.filtradas = this.mascotasService.buscarPorNombre(valor);
    }
  }
  
  save(): void {
    if (!this.mascotaSeleccionada) {
      alert('Por favor, selecciona una mascota primero');
      return;
    }
    
    const formValue = this.agregarHistorialForm.value;
    const nuevoHistorial = this.crearHistorialdeForm(formValue);
    this.historialService.agregarHistorial(nuevoHistorial);
    
    this.obtenerHistorial();
    setTimeout(() => {
      this.historialFiltrada = this.historialporMascota.filter(
        (h) => h.mascotaId === this.mascotaSeleccionada!.id
      );
    }, 100);
    
    this.agregarHistorialForm.reset();
    
    alert('Registro guardado exitosamente');
  }

  crearHistorialdeForm(formValue: any): HistorialClinico {
    const historiales = this.historialService['historialSubject']?.value || [];
    const nuevoId = Math.max(0, ...historiales.map((h) => h.id)) + 1;

    const nuevoHistorial: HistorialClinico = {
      id: nuevoId,
      mascotaId: this.mascotaSeleccionada!.id,
      fechaConsulta: formValue.fechaConsulta || new Date().toISOString().split('T')[0],
      diagnostico: formValue.diagnostico,
      tratamiento: formValue.tratamiento,
      medicamentos: formValue.medicamentos || '',
      peso: formValue.peso,
      temperatura: formValue.temperatura || null,
      observaciones: formValue.observaciones || '',
      veterinarioId: formValue.veterinarioId
    };

    return nuevoHistorial;
  }
}