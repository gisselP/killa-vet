import { Cita, EstadoCita } from '../../app/core/models/cita.model';
import { VETERINARIOS_MOCK } from './veterinarios.data';

export const CITAS_MOCK: Cita[] = [
  {
    id: 1,
    mascotaId: 1,
    fecha: new Date('2024-11-05'),
    hora: '10:00',
    motivo: 'Control general',
    veterinario: VETERINARIOS_MOCK[0],
    estado: 'CONFIRMADA',
    observaciones: 'Primera cita del mes'
  },
  {
    id: 2,
    mascotaId: 2,
    fecha: new Date('2024-11-06'),
    hora: '14:30',
    motivo: 'Vacunación antirrábica',
    veterinario: VETERINARIOS_MOCK[0],
    estado: 'PENDIENTE',
    observaciones: ''
  },
  {
    id: 3,
    mascotaId: 3,
    fecha: new Date('2024-11-07'),
    hora: '11:00',
    motivo: 'Revisión de piel',
    veterinario: VETERINARIOS_MOCK[2],
    estado: 'CONFIRMADA',
    observaciones: 'Posible alergia'
  },
  {
    id: 4,
    mascotaId: 4,
    fecha: new Date('2024-11-04'),
    hora: '09:00',
    motivo: 'Desparasitación',
    veterinario: VETERINARIOS_MOCK[0],
    estado: 'COMPLETADA',
    observaciones: 'Realizado exitosamente'
  },
  {
    id: 5,
    mascotaId: 5,
    fecha: new Date('2024-11-08'),
    hora: '15:00',
    motivo: 'Control post-operatorio',
    veterinario: VETERINARIOS_MOCK[1],
    estado: 'CONFIRMADA',
    observaciones: 'Seguimiento de cirugía'
  },
  {
    id: 6,
    mascotaId: 6,
    fecha: new Date('2024-11-03'),
    hora: '16:00',
    motivo: 'Consulta por vómitos',
    veterinario: VETERINARIOS_MOCK[0],
    estado: 'CANCELADA',
    observaciones: 'Cliente canceló'
  }
];