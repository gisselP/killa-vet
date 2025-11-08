import { Component } from '@angular/core';
import { Mascota } from '../../../client/interfaces/response/mascota.interface';
import { MascotasService } from '../../../../core/services/mascotas.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-mascota',
  templateUrl: './gestion-mascota.component.html',
  styleUrl: './gestion-mascota.component.scss',
  standalone: false,
})
export class GestionMascotaComponent {
  agregarMascotaForm!: FormGroup;
  mascotas: Mascota[] = [];
  filtradas: Mascota[] = [];
  mascotaSeleccionada!: Mascota | null;

  constructor(private mascotasService: MascotasService) {
    this.agregarMascotaForm = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      especie: new FormControl(null, Validators.required),
      raza: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      edad: new FormControl(null, Validators.required),
      peso: new FormControl(null, Validators.required),
      colorPelaje: new FormControl(null, Validators.required),
      fechaNacimiento: new FormControl(null, Validators.required),
      esterilizado: new FormControl(null, Validators.required),
      nombreDueno: new FormControl(null, Validators.required),
      apellidoDueno: new FormControl(null, Validators.required),
      telefonoDueno: new FormControl(null, Validators.required),
      emailDueno: new FormControl(null, Validators.required),
      direccionDueno: new FormControl(null, Validators.required),
      documentoIdentidad: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.mascotasService.obtenerTodasMascotas().subscribe({
      next: (data) => {
        this.mascotas = data;
        this.filtradas = data;
      },
      error: (err) => console.error('Error al cargar mascotas', err),
    });
  }

  eliminarMascota(id: number): void {
    this.mascotasService.eliminarMascota(id);
  }

  seleccionarMascota(mascota: Mascota): void {
    this.mascotaSeleccionada = mascota;
  }

  cancelarSeleccion(): void {
    this.mascotaSeleccionada = null;
  }

  save(): void {
    const formValue = this.agregarMascotaForm.value;
    const nuevaMascota = this.crearMascotaDesdeForm(formValue);
    this.mascotasService.agregarMascota(nuevaMascota);
  }

  crearMascotaDesdeForm(formValue: any): Mascota {
    const mascotas = this.mascotasService['mascotasSubject'].value;
    const nuevoId = Math.max(0, ...mascotas.map((m) => m.id)) + 1;
    const nuevoDuenoId = Math.max(0, ...mascotas.map((m) => m.dueno.id)) + 1;

    const nuevaMascota: Mascota = {
      id: nuevoId,
      nombre: formValue.nombre,
      especie: formValue.especie,
      raza: formValue.raza,
      edad: formValue.edad,
      peso: formValue.peso,
      colorPelaje: formValue.colorPelaje,
      fechaNacimiento: formValue.fechaNacimiento,
      dueno: {
        id: nuevoDuenoId,
        nombre: formValue.nombreDueno,
        apellido: formValue.apellidoDueno,
        telefono: formValue.telefonoDueno,
        email: formValue.emailDueno,
        direccion: formValue.direccionDueno,
        documentoIdentidad: formValue.documentoIdentidad,
      },
      sexo: formValue.sexo,
      esterilizado: formValue.esterilizado,
    };

    return nuevaMascota;
  }

  onChange(event: Event): void {
    const valorSeleccionado = (event.target as HTMLSelectElement).value;
    if (valorSeleccionado === 'Todos') {
      this.filtradas = this.mascotas;
    } else {
      const especie = valorSeleccionado.slice(0, -1);
      this.filtradas = this.mascotas.filter(
        (m) => m.especie.toLowerCase() === especie.toLowerCase()
      );
    }
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
