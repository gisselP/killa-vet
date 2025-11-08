import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { Usuario } from '../../features/client/interfaces/response/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'assets/json/usuarios.json';
  private usuarioLogueadoSubject = new BehaviorSubject<Usuario | null>(this.getUsuarioLogueado());
  usuarioLogueado$ = this.usuarioLogueadoSubject.asObservable();

  constructor(private router: Router, private http: HttpClient) {}

  login(email: string, contrasena: string): Observable<Usuario> {
    return this.http.get<Usuario[]>(this.apiUrl).pipe(
      map((usuarios) => {
        const user = usuarios.find(
          u => u.email === email && u.contrasena === contrasena
        );

        if (!user) {
          throw new Error('Correo o contraseña incorrectos');
        }

        const { contrasena: _, ...usuarioSeguro } = user;
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioSeguro));

        this.usuarioLogueadoSubject.next(usuarioSeguro);

        return usuarioSeguro as Usuario;
      }),
      catchError(err => throwError(() => err))
    );
  }

  getUsuarioLogueado(): Usuario | null {
    const stored = localStorage.getItem('usuarioLogueado');
    return stored ? JSON.parse(stored) : null;
  }

  logout(): void {
    localStorage.removeItem('usuarioLogueado');
    this.usuarioLogueadoSubject.next(null);
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return !!this.getUsuarioLogueado();
  }
}