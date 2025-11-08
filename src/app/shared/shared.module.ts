import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, HomeComponent, LoginComponent],
  imports: [CommonModule, RouterModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [FooterComponent, NavbarComponent, HomeComponent, LoginComponent],
})
export class SharedModule {}
