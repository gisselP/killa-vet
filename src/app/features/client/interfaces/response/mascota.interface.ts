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
  genero?: 'Macho' | 'Hembra';
  esterilizado?: boolean;
}

