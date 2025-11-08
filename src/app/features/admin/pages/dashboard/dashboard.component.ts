import { Component } from '@angular/core';
import { CitaForm } from '../../../client/interfaces/models/cita-form.interface';
import { MascotasService } from '../../../../core/services/mascotas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: false,
})
export class DashboardComponent {
  citas: CitaForm[] = [];
  totalMascotas: number = 0;

  constructor(private mascotasService: MascotasService) {}

  ngOnInit() {
    this.citas = JSON.parse(localStorage.getItem('cita') || '[]');
    this.obtenerMascotas();
  }

  cambiarEstado(index: number, nuevoEstado: 'COMPLETADA' | 'CANCELADA'): void {
    this.citas[index].estado = nuevoEstado;
    localStorage.setItem('cita', JSON.stringify(this.citas));
  }

  get textoPendientes(): string {
    const cantidad = this.citas.filter((c) => c.estado === 'PENDIENTE').length;
    return cantidad === 1 ? '1 pendiente' : `${cantidad} pendientes`;
  }

  get numeroDeEmergencias(): number {
    return this.citas.filter((c) => c.motivo === 'Emergencia').length;
  }

  obtenerMascotas(): void {
    this.mascotasService.obtenerTodasMascotas().subscribe({
      next: (data) => {
        this.totalMascotas = data.length;
      },
      error: (err) => console.error('Error al cargar mascotas', err),
    });
  }
}
