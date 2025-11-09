import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {
goToFacebook() {
  window.open('https://www.facebook.com/killa.vet/', '_blank');
}

}
