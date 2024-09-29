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
  mascota: Mascota = new Mascota( );
  personas: Persona[] = [];

  constructor(private mascotaService: MascotaService, private personaService: PersonaService) {}

  ngOnInit(): void {
    this.mascotaService.getMascotas().subscribe((data) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'application/xml');
      const mascotaNodes = xmlDoc.getElementsByTagName('item');
      const mascotasArray: Mascota[] = [];
  
      for (let i = 0; i < mascotaNodes.length; i++) {
        const mascota = new Mascota();
        
        const nombreNode = mascotaNodes[i].getElementsByTagName('nombre')[0];
        const razaNode = mascotaNodes[i].getElementsByTagName('raza')[0];
        const edadNode = mascotaNodes[i].getElementsByTagName('edad')[0];
        const personaIdNode = mascotaNodes[i].getElementsByTagName('personaId')[0];
  
        // Verificar si los nodos existen antes de acceder a sus propiedades
        if ( nombreNode && razaNode && edadNode && personaIdNode) {
          mascota.nombre = nombreNode.textContent || '';
          mascota.raza = razaNode.textContent || '';
          mascota.edad = Number(edadNode.textContent);
          mascota.personaId = Number(personaIdNode.textContent);
          mascotasArray.push(mascota);
        }
      }
  
      this.mascotas = mascotasArray;
    });
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
  
      this.personas = personasArray;  // Asegúrate de que personas esté correctamente asignado
    });
  }
  
  

  addMascota(nombre: string, raza: string, edad: number, personaId: number) {
    this.mascotaService.createMascota(this.mascota).subscribe(
      
      response => {
        console.log('Mascota guardada correctamente', response);
        this.mascotas.push(response);
      },
      error => {
        console.error('Error al guardar la mascota', error);
      }
    );
  }  
}
