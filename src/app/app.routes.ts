import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { AgendaCitasComponent } from './features/client/pages/agenda-citas/agenda-citas.component';
import { PacientesFelicesComponent } from './features/client/pages/pacientes-felices/pacientes-felices.component'
import { NgModule } from '@angular/core';
import { LoginComponent } from './shared/pages/login/login.component';
import { HistorialClinicoComponent } from './features/admin/pages/historial-clinico/historial-clinico.component';
import { GestionMascotaComponent } from './features/admin/pages/gestion-mascota/gestion-mascota.component';
import { DashboardComponent } from './features/admin/pages/dashboard/dashboard.component';
import { authGuard } from './core/guards/guards/auth.guard';

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
    path: 'pacientes-felices',
    component: PacientesFelicesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'veterinario/dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'veterinario/gestion-mascotas',
    component: GestionMascotaComponent,
    canActivate: [authGuard],
  },
  {
    path: 'veterinario/historial-clinico',
    component: HistorialClinicoComponent,
    canActivate: [authGuard],
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
