import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mascota } from '../../features/client/interfaces/response/mascota.interface';
import { StorageService } from './storage.service';
import { IdGeneratorService } from './id-generator.service'; 

@Injectable({
  providedIn: 'root',
})
export class MascotasService {
  
  private readonly STORAGE_KEY = 'mascotas';
  private mascotasSubject = new BehaviorSubject<Mascota[]>([]);
  public mascotas$: Observable<Mascota[]> = this.mascotasSubject.asObservable();

  constructor(private storageService: StorageService, private idGenerator: IdGeneratorService) {
    this.cargarMascotas();
  }

  private cargarMascotas(): void {
    const mascotas = this.storageService.obtener<Mascota[]>(this.STORAGE_KEY) || [];
    this.mascotasSubject.next(mascotas);
  }

  obtenerTodasMascotas(): Observable<Mascota[]> {
    return this.mascotas$;
  }

  obtenerMascotaPorId(id: number): Mascota | undefined {
    const mascotas = this.mascotasSubject.value;
    return mascotas.find(m => m.id === id);
  }

  agregarMascotaPorId(mascota: Mascota): void {
    mascota.id = this.idGenerator.generarId('mascotas'); 
    const mascotas = [...this.mascotasSubject.value, mascota];
    this.storageService.guardar(this.STORAGE_KEY, mascotas);
    this.mascotasSubject.next(mascotas);
  }

  actualizarMascotaPorId(mascotaActualizada: Mascota): void {
    const mascotas = this.mascotasSubject.value.map(m => 
      m.id === mascotaActualizada.id ? mascotaActualizada : m
    );
    this.storageService.guardar(this.STORAGE_KEY, mascotas);
    this.mascotasSubject.next(mascotas);
  }

  eliminarMascotaPorId(id: number): void {
    const mascotas = this.mascotasSubject.value.filter(m => m.id !== id);
    this.storageService.guardar(this.STORAGE_KEY, mascotas);
    this.mascotasSubject.next(mascotas);
  }

  buscarPorNombre(nombre: string): Mascota[] {
    const mascotas = this.mascotasSubject.value;
    return mascotas.filter(m => 
      m.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  obtenerMascotasPorDueno(duenoId: number): Mascota[] {
    const mascotas = this.mascotasSubject.value;
    return mascotas.filter(m => m.dueno.id === duenoId);
  }

}
