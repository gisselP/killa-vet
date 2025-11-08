import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AgendaCitasComponent } from './pages/agenda-citas/agenda-citas.component';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgendaCitasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientModule {}
