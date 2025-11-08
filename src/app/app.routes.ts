import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { AgendaCitasComponent } from './features/client/pages/agenda-citas/agenda-citas.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './shared/pages/login/login.component';
import { HistorialCitasComponent } from './features/admin/pages/historial-citas/historial-citas.component';
import { GestionMascotaComponent } from './features/admin/pages/gestion-mascota/gestion-mascota.component';
import { DashboardComponent } from './features/admin/pages/dashboard/.dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'agendar-cita',
    component: AgendaCitasComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { 
  path: 'veterinario/dashboard', 
  component: DashboardComponent 
},
{ 
  path: 'veterinario/gestion-mascotas', 
  component: GestionMascotaComponent 
},
{ 
  path: 'veterinario/listar-citas', 
  component: HistorialCitasComponent 
},
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
