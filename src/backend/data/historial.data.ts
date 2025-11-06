import { HistorialAtencion } from '../../../src/app/core/models/historial.model';
import { VETERINARIOS_MOCK } from './veterinarios.data';

export const HISTORIAL_MOCK: HistorialAtencion[] = [
  {
    id: 1,
    citaId: 4,
    mascotaId: 4,
    nombreMascota: 'Michi',
    fecha: new Date('2024-11-04'),
    veterinario: VETERINARIOS_MOCK[0],
    diagnostico: 'Paciente sano, requiere desparasitación rutinaria',
    tratamiento: 'Desparasitante oral',
    medicamentos: ['Drontal Plus'],
    peso: 3.8,
    temperatura: 38.5,
    proximaCita: new Date('2024-12-04'),
    observaciones: 'Repetir tratamiento en 3 meses'
  },
  {
    id: 2,
    citaId: 1,
    mascotaId: 1,
    nombreMascota: 'Max',
    fecha: new Date('2024-10-15'),
    veterinario: VETERINARIOS_MOCK[0],
    diagnostico: 'Control general satisfactorio',
    tratamiento: 'Vacuna séxtuple',
    medicamentos: ['Vacuna Vanguard Plus'],
    examenes: ['Examen físico completo'],
    peso: 28.5,
    temperatura: 38.2,
    proximaCita: new Date('2025-01-15'),
    observaciones: 'Paciente en excelente estado',
    receta: 'Ninguna'
  },
  {
    id: 3,
    citaId: 2,
    mascotaId: 3,
    nombreMascota: 'Rocky',
    fecha: new Date('2024-09-20'),
    veterinario: VETERINARIOS_MOCK[2],
    diagnostico: 'Dermatitis alérgica leve',
    tratamiento: 'Tratamiento tópico y antihistamínico',
    medicamentos: ['Apoquel 16mg', 'Shampoo medicado'],
    examenes: ['Raspado de piel'],
    peso: 35.0,
    temperatura: 38.4,
    proximaCita: new Date('2024-11-20'),
    observaciones: 'Evitar contacto con césped recién cortado',
    receta: 'Apoquel 16mg - 1 tableta cada 12 horas por 14 días'
  },
  {
    id: 4,
    citaId: 3,
    mascotaId: 5,
    nombreMascota: 'Bella',
    fecha: new Date('2024-10-01'),
    veterinario: VETERINARIOS_MOCK[1],
    diagnostico: 'Recuperación post-quirúrgica exitosa',
    tratamiento: 'Antibióticos y antiinflamatorios',
    medicamentos: ['Amoxicilina 500mg', 'Meloxicam 1.5mg'],
    peso: 30.2,
    temperatura: 38.3,
    proximaCita: new Date('2024-11-08'),
    observaciones: 'Herida cicatrizando correctamente',
    receta: 'Amoxicilina 500mg - 1 cápsula cada 12 horas por 7 días'
  }
];