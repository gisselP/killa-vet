import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Mascota } from '../../interfaces/response/mascota.interface';
import { Veterinario } from '../../interfaces/response/veterinario.interface';
import { VETERINARIOS_MOCK } from '../../../../../backend/data/veterinarios.data';
import { VeterinariosService } from '../../../../core/services/veterinarios.service';

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

  constructor(private veterinariosService: VeterinariosService) {
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
    this.obtenerNombreVeterinario();
  }

  agendarCita(): void {
    console.log('37')
    if (this.citaForm.invalid) {
      alert('Por favor completa todos los campos');
      return;
    }
    console.log(this.citaForm.value);
  }
  onMascotaChange(event: Event): void {
    console.log('JELOU');
  }

  obtenerNombreVeterinario(): void {
    this.veterinariosService.getVeterinarios().subscribe((response) => {
      this.veterinarios = response;
    });
  }
}
