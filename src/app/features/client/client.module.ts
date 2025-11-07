import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HistorialMascotaComponent } from './pages/historial-mascota/historial-mascota.component';
import { ListaMascotasComponent } from './pages/lista-mascotas/lista-mascotas.component';
import { RegistroMascotasComponent } from './pages/registro-mascotas/registro-mascotas.component';
import { AgendaCitasComponent } from './pages/agenda-citas/agenda-citas.component';
@NgModule({
  declarations: [
    HistorialMascotaComponent,
    ListaMascotasComponent,
    RegistroMascotasComponent,
    AgendaCitasComponent
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
export class ClientModule {}
