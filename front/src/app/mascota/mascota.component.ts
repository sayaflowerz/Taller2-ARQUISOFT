import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../services/mascota-service.service';
import { Mascota } from '../model/mascota';
import { PersonaService } from '../services/persona-service.service';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
  mascotas: Mascota[] = [];
  mascota: Mascota = new Mascota();
  personas: Persona[] = [];

  constructor(private mascotaService: MascotaService, private personaService: PersonaService) {}

  ngOnInit(): void {
    this.mascotaService.getMascotas().subscribe((data) => {
      this.mascotas = data;
    });
    this.personaService.getPersonas().subscribe((data) => {
      this.personas = data;
    });
  }

  addMascota(): void {
    this.mascotaService.createMascota(this.mascota).subscribe(() => {
      this.mascotas.push(this.mascota);
      this.mascota = new Mascota();
    });
  }
}
