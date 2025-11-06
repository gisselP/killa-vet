import { Mascota } from '../../../src/app/core/models/mascota.model';
import { DUENOS_MOCK } from './duenos.data';

export const MASCOTAS_MOCK: Mascota[] = [
  {
    id: 1,
    nombre: 'Max',
    especie: 'Perro',
    raza: 'Labrador',
    edad: 3,
    peso: 28.5,
    colorPelaje: 'Dorado',
    fechaNacimiento: new Date('2021-03-15'),
    dueno: DUENOS_MOCK[0],
    genero: 'Macho',
    esterilizado: true
  },
  {
    id: 2,
    nombre: 'Luna',
    especie: 'Gato',
    raza: 'Persa',
    edad: 2,
    peso: 4.2,
    colorPelaje: 'Blanco',
    fechaNacimiento: new Date('2022-06-20'),
    dueno: DUENOS_MOCK[0],
    genero: 'Hembra',
    esterilizado: true
  },
  {
    id: 3,
    nombre: 'Rocky',
    especie: 'Perro',
    raza: 'Pastor Alemán',
    edad: 5,
    peso: 35.0,
    colorPelaje: 'Negro y Marrón',
    fechaNacimiento: new Date('2019-01-10'),
    dueno: DUENOS_MOCK[1],
    genero: 'Macho',
    esterilizado: false
  },
  {
    id: 4,
    nombre: 'Michi',
    especie: 'Gato',
    raza: 'Siamés',
    edad: 1,
    peso: 3.8,
    colorPelaje: 'Crema con puntas marrones',
    fechaNacimiento: new Date('2023-05-12'),
    dueno: DUENOS_MOCK[1],
    genero: 'Macho',
    esterilizado: false
  },
  {
    id: 5,
    nombre: 'Bella',
    especie: 'Perro',
    raza: 'Golden Retriever',
    edad: 4,
    peso: 30.2,
    colorPelaje: 'Dorado claro',
    fechaNacimiento: new Date('2020-08-25'),
    dueno: DUENOS_MOCK[2],
    genero: 'Hembra',
    esterilizado: true
  },
  {
    id: 6,
    nombre: 'Toby',
    especie: 'Perro',
    raza: 'Beagle',
    edad: 2,
    peso: 12.5,
    colorPelaje: 'Tricolor',
    fechaNacimiento: new Date('2022-02-14'),
    dueno: DUENOS_MOCK[3],
    genero: 'Macho',
    esterilizado: false
  }
];