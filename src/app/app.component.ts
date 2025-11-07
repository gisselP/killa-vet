import { Component, OnDestroy, OnInit } from '@angular/core';
import { validarEmail } from './features/client/utils/validations.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'vet-app';
hideLayout = true;
  ngOnInit() {
    this.prueba();
  }
  
  ngOnDestroy(): void {
    
  }

  prueba() {
    const email = validarEmail('email');
    console.log(email);
  }
}
