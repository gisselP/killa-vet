import { Veterinario } from '../../../src/app/core/models/veterinario.model';

export const VETERINARIOS_MOCK: Veterinario[] = [
  {
    id: 1,
    nombre: 'Carlos',
    apellido: 'García',
    especialidad: 'Medicina General',
    telefono: '987654321',
    email: 'carlos.garcia@killavet.com',
    numeroLicencia: 'VET-2020-001',
    horarioAtencion: 'Lunes a Viernes 9am-6pm'
  },
  {
    id: 2,
    nombre: 'María',
    apellido: 'Rodríguez',
    especialidad: 'Cirugía',
    telefono: '987654322',
    email: 'maria.rodriguez@killavet.com',
    numeroLicencia: 'VET-2019-045',
    horarioAtencion: 'Martes y Jueves 10am-4pm'
  },
  {
    id: 3,
    nombre: 'Luis',
    apellido: 'Fernández',
    especialidad: 'Dermatología',
    telefono: '987654323',
    email: 'luis.fernandez@killavet.com',
    numeroLicencia: 'VET-2021-112',
    horarioAtencion: 'Lunes a Sábado 8am-2pm'
  }
];