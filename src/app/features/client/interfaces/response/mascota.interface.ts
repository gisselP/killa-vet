import { Dueno } from './dueno.interface';

export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  peso: number;
  colorPelaje: string;
  fechaNacimiento: Date;
  dueno: Dueno; 
  sexo?: 'Macho' | 'Hembra';
  esterilizado?: boolean;
}

