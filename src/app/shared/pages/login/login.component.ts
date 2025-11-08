import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: false,
})
export class LoginComponent {
  errorMsg: string = '';
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login(): void {
    if (!this.loginForm.value.email || !this.loginForm.value.password) {
      this.errorMsg = 'Por favor, completa todos los campos.';
      return;
    }

    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: () => {
          this.router.navigate(['veterinario/dashboard']);
        },
        error: (err) => {
          console.log(err);
          this.errorMsg = err.message || 'Correo o contraseña incorrectos';
        },
      });
  }
}
