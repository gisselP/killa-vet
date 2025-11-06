import { Veterinario } from './veterinario.interface';

export interface HistorialAtencion {
  id: number;
  citaId:  number;
  mascotaId: number;

  nombreMascota: string;
  fecha: Date;
  veterinario: Veterinario;
  diagnostico: string;
  tratamiento: string;
  medicamentos?: string[];
  examenes?: string[];
  peso: number;
  temperatura?: number;
  proximaCita?: Date;
  observaciones?: string;
  receta?: string;
}