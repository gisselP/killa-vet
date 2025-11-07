import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Mascota } from '../../interfaces/response/mascota.interface';
import { Veterinario } from '../../interfaces/response/veterinario.interface';
import { VETERINARIOS_MOCK } from '../../../../../backend/data/veterinarios.data';

@Component({
  selector: 'app-agenda-citas',
  templateUrl: './agenda-citas.component.html',
  styleUrl: './agenda-citas.component.scss',
  standalone: false,
})
export class AgendaCitasComponent {
  citaForm!: FormGroup;
  mascotas: Mascota[] = [];
  veterinarios: Veterinario[] = VETERINARIOS_MOCK;
  mascotaSeleccionada?: Mascota;
  fechaMinima: string | undefined;

  agendarCita(): void {
    if (this.citaForm.invalid) {
      alert('Por favor completa todos los campos');
      return;
    }
  }
  onMascotaChange( event: Event): void{
    console.log('JELOU')
  }
}

