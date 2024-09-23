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
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'application/xml');
      const personasNodes = xmlDoc.getElementsByTagName('item');
      const personasArray: Persona[] = [];
  
      for (let i = 0; i < personasNodes.length; i++) {
        const persona = new Persona();
        persona.id = Number(personasNodes[i].getElementsByTagName('id')[0].textContent);
        persona.nombre = personasNodes[i].getElementsByTagName('nombre')[0].textContent || '';
        persona.edad = Number(personasNodes[i].getElementsByTagName('edad')[0].textContent);
        personasArray.push(persona);
      }
  
      this.personas = personasArray;
    });
  }
  

  addPersona(): void {
    this.personaService.createPersona(this.persona).subscribe(() => {
      this.personas.push(this.persona);
      this.persona = new Persona();
    });
  }
}
