import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona-service.service';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  personas: Persona[] = [];
  persona: Persona = new Persona();

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe((data) => {
      this.personas = data;
    });
  }

  addPersona(): void {
    this.personaService.createPersona(this.persona).subscribe(() => {
      this.personas.push(this.persona);
      this.persona = new Persona();
    });
  }
}
