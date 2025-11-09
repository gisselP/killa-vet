
export interface HistorialClinico {
  id: number;                
  mascotaId: number; 
  veterinarioId: number; 
  fechaConsulta: string; 
  diagnostico: string; 
  tratamiento: string; 
  medicamentos: string; 
  peso: number; 
  temperatura?: number; 
  observaciones?: string;
}