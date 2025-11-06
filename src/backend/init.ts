import { Injectable } from '@angular/core';
import { StorageService } from '../app/core/services/storage.service';
import { MASCOTAS_MOCK } from './data/mascota.data';
import { CITAS_MOCK } from './data/citas.data';
import { HISTORIAL_MOCK } from './data/historial.data';

@Injectable({
  providedIn: 'root'
})
export class DataInitService {

  constructor(private storageService: StorageService) { }

  inicializarDatos(): void {
      this.storageService.guardar('mascotas', MASCOTAS_MOCK);
      this.storageService.guardar('mascotas_counter', MASCOTAS_MOCK.length);
      this.storageService.guardar('citas', CITAS_MOCK);
      this.storageService.guardar('citas_counter', CITAS_MOCK.length);
      this.storageService.guardar('historial', HISTORIAL_MOCK);
      this.storageService.guardar('historial_counter', HISTORIAL_MOCK.length);
      }
}