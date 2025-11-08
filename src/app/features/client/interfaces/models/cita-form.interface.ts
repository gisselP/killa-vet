export interface CitaForm {
  nombre: string;
  fecha: string; 
  hora: string;
  motivo: string;
  observaciones: string;
  estado?: 'PENDIENTE' | 'COMPLETADA' | 'CANCELADA';
}