import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaComponent } from './mascota/mascota.component';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
  { path: 'mascotas', component: MascotaComponent },
  { path: 'personas', component: PersonaComponent },
  { path: '', redirectTo: '/mascotas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
