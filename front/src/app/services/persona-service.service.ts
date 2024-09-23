import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiUrl = 'http://localhost:8080/personas';

  constructor(private http: HttpClient) {}

  

  getPersonas(): Observable<any> {
    return this.http.get(this.apiUrl, { 
      headers: { 'Accept': 'application/xml' }, 
      responseType: 'text'  
    });
  }
  
  createPersona(persona: Persona): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/xml'
    });
    const personaXml = this.convertPersonaToXML(persona);
    return this.http.post(this.apiUrl, personaXml, { headers, responseType: 'text' });
  }
  
  private convertPersonaToXML(persona: Persona): string {
    return `
      <Persona>
        <nombre>${persona.nombre}</nombre>
        <edad>${persona.edad}</edad>
      </Persona>
    `;
  }
  
}
