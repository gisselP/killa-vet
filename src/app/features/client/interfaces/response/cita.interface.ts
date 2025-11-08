import { Veterinario } from './veterinario.interface';
export type EstadoCita = 'PENDIENTE' | 'COMPLETADA' | 'CANCELADA';

export interface Cita {
  id: number;
  mascotaId: number;
  fecha: Date;
  hora: string;
  motivo: string;
  veterinario: Veterinario;
  estado: EstadoCita;
  observaciones?: string;
}
