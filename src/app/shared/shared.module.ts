import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AgendaCitasComponent } from "./pages/agenda-citas/agenda-citas.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    FooterComponent,
    AgendaCitasComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [CommonModule],
  exports: [FooterComponent, NavbarComponent, HomeComponent, AgendaCitasComponent],
})
export class SharedModule {}
