import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HistorialAtencion } from '../../features/client/interfaces/response/historial.interface';
import { StorageService } from './storage.service';
import { IdGeneratorService } from './id-generator.service'; 

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private readonly STORAGE_KEY = 'historial';
  private historialSubject = new BehaviorSubject<HistorialAtencion[]>([]);
  public historial$: Observable<HistorialAtencion[]> = this.historialSubject.asObservable();

  constructor(private storageService: StorageService, private idGenerator: IdGeneratorService) {
    this.cargarHistorial();
  }

  private cargarHistorial(): void {
    const historial = this.storageService.obtener<HistorialAtencion[]>(this.STORAGE_KEY) || [];
    const historialConFechas = historial.map(h => ({
      ...h,
      fecha: new Date(h.fecha),
      proximaCita: h.proximaCita ? new Date(h.proximaCita) : undefined
    }));
    this.historialSubject.next(historialConFechas);
  }

  obtenerHistorial(): Observable<HistorialAtencion[]> {
    return this.historial$;
  }

  obtenerHistorialPorId(id: number): HistorialAtencion | undefined {
    const historial = this.historialSubject.value;
    return historial.find(h => h.id === id);
  }

  agregarHistorial(historial: HistorialAtencion): void {
    historial.id = this.idGenerator.generarId('historial');
    const historiales = [...this.historialSubject.value, historial];
    this.storageService.guardar(this.STORAGE_KEY, historiales);
    this.historialSubject.next(historiales);
  }

  actualizarHistorial(historialActualizado: HistorialAtencion): void {
    const historiales = this.historialSubject.value.map(h => 
      h.id === historialActualizado.id ? historialActualizado : h
    );
    this.storageService.guardar(this.STORAGE_KEY, historiales);
    this.historialSubject.next(historiales);
  }

  obtenerHistorialPorMascota(mascotaId: number): HistorialAtencion[] {
    const historial = this.historialSubject.value;
    return historial
      .filter(h => h.mascotaId === mascotaId)
      .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
  }

  obtenerUltimaAtencion(mascotaId: number): HistorialAtencion | undefined {
    const historialMascota = this.obtenerHistorialPorMascota(mascotaId);
    return historialMascota.length > 0 ? historialMascota[0] : undefined;
  }

}