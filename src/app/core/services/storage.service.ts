import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() { }

  guardar<T>(key: string, data: T): void {
    try {
      const jsonData = JSON.stringify(data);
      localStorage.setItem(key, jsonData);
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  }

  obtener<T>(key: string): T | null {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error al obtener de localStorage:', error);
      return null;
    }
  }

  eliminar(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error al eliminar de localStorage:', error);
    }
  }

  limpiarTodo(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error al limpiar localStorage:', error);
    }
  }

  existe(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
