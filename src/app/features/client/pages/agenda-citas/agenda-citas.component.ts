import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Mascota } from '../../interfaces/response/mascota.interface';
import { Veterinario } from '../../interfaces/response/veterinario.interface';
import { VeterinariosService } from '../../../../core/services/veterinarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda-citas',
  templateUrl: './agenda-citas.component.html',
  styleUrl: './agenda-citas.component.scss',
  standalone: false,
})
export class AgendaCitasComponent implements OnInit {
  citaForm!: FormGroup;
  mascotas: Mascota[] = [];
  veterinarios: Veterinario[] = [];
  mascotaSeleccionada?: Mascota;
  fechaMinima: string | undefined;

  constructor(
    private veterinariosService: VeterinariosService,
    private router: Router
  ) {
    this.citaForm = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
      hora: new FormControl('', Validators.required),
      veterinarioId: new FormControl('', Validators.required),
      motivo: new FormControl('', Validators.required),
      observaciones: new FormControl(null),
    });
  }

  ngOnInit() {
    const hoy = new Date();
    this.fechaMinima = hoy.toISOString().split('T')[0];
    this.obtenerNombreVeterinario();
  }

  agendarCita(): void {
    if (this.citaForm.invalid) {
      alert('Por favor completa todos los campos');
      return;
    }
  }

  obtenerNombreVeterinario(): void {
    this.veterinariosService.getVeterinarios().subscribe((response) => {
      this.veterinarios = response;
    });
  }

  saveChanges(): void {
    const cita = {
      ...this.citaForm.value,
      estado: 'PENDIENTE', // agregamos el estado por defecto
    };

    const citasGuardadas = JSON.parse(localStorage.getItem('cita') || '[]');
    citasGuardadas.push(cita);
    localStorage.setItem('cita', JSON.stringify(citasGuardadas));

    this.citaForm.reset();
    this.router.navigate(['/']);
  }
}
