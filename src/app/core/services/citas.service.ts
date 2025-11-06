import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cita, EstadoCita } from '../../features/client/interfaces/response/cita.interface';
import { StorageService } from './storage.service';
import { IdGeneratorService } from './id-generator.service'; 

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private readonly STORAGE_KEY = 'citas';
  private citasSubject = new BehaviorSubject<Cita[]>([]);
  public citas$: Observable<Cita[]> = this.citasSubject.asObservable();

  constructor(private storageService: StorageService, private idGenerator: IdGeneratorService) {
    this.cargarCitas();
  }

  private cargarCitas(): void {
    const citas = this.storageService.obtener<Cita[]>(this.STORAGE_KEY) || [];
    const citasConFechas = citas.map(c => ({
      ...c,
      fecha: new Date(c.fecha)
    }));
    this.citasSubject.next(citasConFechas);
  }

  obtenerCitas(): Observable<Cita[]> {
    return this.citas$;
  }

  obtenerCitaPorId(id: number): Cita | undefined {
    const citas = this.citasSubject.value;
    return citas.find(c => c.id === id);
  }

  agregarCita(cita: Cita): void {
    cita.id = this.idGenerator.generarId('citas');
    cita.estado = 'PENDIENTE';
    const citas = [...this.citasSubject.value, cita];
    this.storageService.guardar(this.STORAGE_KEY, citas);
    this.citasSubject.next(citas);
  }

  actualizarCita(citaActualizada: Cita): void {
    const citas = this.citasSubject.value.map(c => 
      c.id === citaActualizada.id ? citaActualizada : c
    );
    this.storageService.guardar(this.STORAGE_KEY, citas);
    this.citasSubject.next(citas);
  }

  cambiarEstadoCita(id: number, nuevoEstado: EstadoCita): void {
    const citas = this.citasSubject.value.map(c => 
      c.id === id ? { ...c, estado: nuevoEstado } : c
    );
    this.storageService.guardar(this.STORAGE_KEY, citas);
    this.citasSubject.next(citas);
  }

  eliminarCita(id: number): void {
    const citas = this.citasSubject.value.filter(c => c.id !== id);
    this.storageService.guardar(this.STORAGE_KEY, citas);
    this.citasSubject.next(citas);
  }

  obtenerCitasPorMascota(mascotaId: number): Cita[] {
    const citas = this.citasSubject.value;
    return citas.filter(c => c.mascotaId === mascotaId);
  }

  obtenerCitasPorFecha(fecha: Date): Cita[] {
    const citas = this.citasSubject.value;
    return citas.filter(c => {
      const citaFecha = new Date(c.fecha);
      return citaFecha.toDateString() === fecha.toDateString();
    });
  }

  obtenerCitasPendientes(): Cita[] {
    const citas = this.citasSubject.value;
    return citas.filter(c => c.estado === 'PENDIENTE');
  }

  obtenerCitasProximas(): Cita[] {
    const citas = this.citasSubject.value;
    const hoy = new Date();
    const enUnaSemana = new Date();
    enUnaSemana.setDate(hoy.getDate() + 7);

    return citas.filter(c => {
      const citaFecha = new Date(c.fecha);
      return citaFecha >= hoy && citaFecha <= enUnaSemana;
    });
  }
}