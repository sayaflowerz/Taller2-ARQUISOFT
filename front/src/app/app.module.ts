import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Asegúrate de importar esto

import { AppComponent } from './app.component';
import { MascotaComponent } from './mascota/mascota.component';
import { PersonaComponent } from './persona/persona.component';
import { AppRoutingModule } from './app-routing.module'; // Importar módulo de rutas

@NgModule({
  declarations: [
    AppComponent,
    MascotaComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,  
    RouterModule       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
