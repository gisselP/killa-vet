import { Veterinario } from '../interfaces/response/veterinario.interface';

export function validarEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validarTelefono(telefono: string): boolean {
  const regex = /^9\d{8}$/;
  return regex.test(telefono);
}

export function obtenerNombreCompleto(
  nombre: string,
  apellido: string
): string {
  return `Dr(a). ${nombre} ${apellido}`;
}

export function obtenerCredencial(datosVeterinario: Veterinario): string {
  return `${datosVeterinario.nombre} ${datosVeterinario.apellido} - ${datosVeterinario.especialidad}`;
}
