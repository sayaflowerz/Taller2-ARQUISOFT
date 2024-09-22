import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiUrl = 'http://localhost:8080/personas';

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl, { headers: { 'Accept': 'application/xml' } });
  }

  createPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, persona, { headers: { 'Content-Type': 'application/xml' } });
  }
}
