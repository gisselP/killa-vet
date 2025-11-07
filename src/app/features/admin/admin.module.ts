import { DashboardComponent } from './pages/dashboard/.dashboard.component';
import { HistorialCitasComponent } from './pages/historial-citas/historial-citas.component';
import { GestionMascotaComponent } from './pages/gestion-mascota/gestion-mascota.component';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app.routes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HistorialCitasComponent,
    GestionMascotaComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule {}
