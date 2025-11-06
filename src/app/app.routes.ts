import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { AgendaCitasComponent } from './shared/pages/agenda-citas/agenda-citas.component';
import { HistorialMascotaComponent } from './features/client/pages/historial-mascota/historial-mascota.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  { 
    path: 'agendar-cita', 
    component: AgendaCitasComponent 
  },
 /*  { 
    path: 'mascotas', 
    component: ListaMascotasComponent 
  },
  { 
    path: 'mascotas/registro', 
    component: RegistroMascotaComponent 
  }, */
  { 
    path: 'mascotas/:id',
    component: HistorialMascotaComponent 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }