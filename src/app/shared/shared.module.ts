import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app.routes';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, HomeComponent, LoginComponent],
  imports: [CommonModule, RouterModule, AppRoutingModule],
  exports: [FooterComponent, NavbarComponent, HomeComponent, LoginComponent],
})
export class SharedModule {}
