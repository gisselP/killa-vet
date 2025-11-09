import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HistorialClinico } from '../../features/client/interfaces/response/historial.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HistorialService {
  private readonly STORAGE_KEY = 'historial';
  private readonly apiUrl = 'assets/json/historialClinico.json';
  private historialSubject = new BehaviorSubject<HistorialClinico[]>([]);
  public historial$: Observable<HistorialClinico[]> =
    this.historialSubject.asObservable();

  constructor(private http: HttpClient) {
    this.inicializarHistorial();
  }

  private inicializarHistorial(): void {
    const guardadas = localStorage.getItem(this.STORAGE_KEY);

    if (guardadas) {
      this.historialSubject.next(JSON.parse(guardadas));
    } else {
      this.http.get<HistorialClinico[]>(this.apiUrl).subscribe({
        next: (data) => {
          this.historialSubject.next(data);
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
        },
        error: (err) => {
          console.error('Error al cargar mascotas del mock', err);
          this.historialSubject.next([]);
        },
      });
    }
  }

  obtenerTodoHistorial(): Observable<HistorialClinico[]> {
    return this.historial$;
  }

  obtenerHistorialPorId(id: number): HistorialClinico | undefined {
    return this.historialSubject.value.find((m) => m.id === id);
  }

  agregarHistorial(historial: HistorialClinico): void {
    const historiales = this.historialSubject.value;
    const maxId = Math.max(0, ...historiales.map((m) => m.id));
    historial.id = maxId + 1;

    const nuevasMascotas = [...historiales, historial];
    this.historialSubject.next(nuevasMascotas);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(nuevasMascotas));
  }
}
