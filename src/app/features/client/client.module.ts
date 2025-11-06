import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialMascotaComponent } from './pages/historial-mascota/historial-mascota.component';
import { ListaMascotasComponent } from './pages/lista-mascotas/lista-mascotas.component';
import { RegistroMascotasComponent } from './pages/registro-mascotas/registro-mascotas.component';

@NgModule({
  declarations: [
    HistorialMascotaComponent,
    ListaMascotasComponent,
    RegistroMascotasComponent,
  ],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientModule {}
