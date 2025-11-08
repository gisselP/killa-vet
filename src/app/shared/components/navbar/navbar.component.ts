import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Usuario } from '../../../features/client/interfaces/response/usuarios.interface';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false,
})
export class NavbarComponent implements OnInit, OnDestroy {
  mensaje = 'Killa Vet';
  usuarioLogueado: Usuario | null = null;
  private sub!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.authService.usuarioLogueado$.subscribe(
      (usuario) => (this.usuarioLogueado = usuario)
    );
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
  }

  navigate(): void {
    if (this.usuarioLogueado) {
      this.router.navigate(['veterinario/dashboard']);
    } else {
       this.router.navigate(['/']);
    }
  }
}
