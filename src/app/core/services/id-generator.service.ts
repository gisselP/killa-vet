import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {

  constructor(private storageService: StorageService) { }

  generarId(entidad: string): number {
    const counterKey = `${entidad}_counter`;
    let counter = this.storageService.obtener<number>(counterKey) || 0;
    counter++;
    this.storageService.guardar(counterKey, counter);
    return counter;
  }
}