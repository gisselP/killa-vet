import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mascota } from '../../features/client/interfaces/response/mascota.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MascotasService {
  private readonly STORAGE_KEY = 'mascotas';
  private readonly apiUrl = 'assets/json/mascotas.json';
  private mascotasSubject = new BehaviorSubject<Mascota[]>([]);
  public mascotas$: Observable<Mascota[]> = this.mascotasSubject.asObservable();

  constructor(private http: HttpClient) {
    this.inicializarMascotas();
  }

  private inicializarMascotas(): void {
    const guardadas = localStorage.getItem(this.STORAGE_KEY);

    if (guardadas) {
      this.mascotasSubject.next(JSON.parse(guardadas));
    } else {
      this.http.get<Mascota[]>(this.apiUrl).subscribe({
        next: (data) => {
          this.mascotasSubject.next(data);
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
        },
        error: (err) => {
          console.error('Error al cargar mascotas del mock', err);
          this.mascotasSubject.next([]);
        },
      });
    }
  }

  obtenerTodasMascotas(): Observable<Mascota[]> {
    return this.mascotas$;
  }

  obtenerMascotaPorId(id: number): Mascota | undefined {
    return this.mascotasSubject.value.find((m) => m.id === id);
  }

  agregarMascota(mascota: Mascota): void {
    const mascotas = this.mascotasSubject.value;
    const maxId = Math.max(0, ...mascotas.map((m) => m.id));
    mascota.id = maxId + 1;

    const nuevasMascotas = [...mascotas, mascota];
    this.mascotasSubject.next(nuevasMascotas);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(nuevasMascotas));
  }

  actualizarMascota(mascotaActualizada: Mascota): void {
    const nuevasMascotas = this.mascotasSubject.value.map((m) =>
      m.id === mascotaActualizada.id ? mascotaActualizada : m
    );
    this.mascotasSubject.next(nuevasMascotas);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(nuevasMascotas));
  }

  eliminarMascota(id: number): void {
    const nuevasMascotas = this.mascotasSubject.value.filter(
      (m) => m.id !== id
    );
    this.mascotasSubject.next(nuevasMascotas);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(nuevasMascotas));
  }

  buscarPorNombre(nombre: string): Mascota[] {
    return this.mascotasSubject.value.filter((m) =>
      m.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  obtenerMascotasPorDueno(duenoId: number): Mascota[] {
    return this.mascotasSubject.value.filter((m) => m.dueno.id === duenoId);
  }
}
