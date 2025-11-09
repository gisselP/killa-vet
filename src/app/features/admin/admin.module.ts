import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HistorialClinicoComponent } from './pages/historial-clinico/historial-clinico.component';
import { GestionMascotaComponent } from './pages/gestion-mascota/gestion-mascota.component';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app.routes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HistorialClinicoComponent,
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
