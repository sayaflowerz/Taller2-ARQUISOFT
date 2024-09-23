import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../model/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private apiUrl = 'http://localhost:8080/mascotas';

  constructor(private http: HttpClient) {}

  // Convierte la Mascota a XML para enviar en la petición
  convertMascotaToXML(mascota: Mascota): string {
    return `
      <Mascota>
        <nombre>${mascota.nombre}</nombre>
        <raza>${mascota.raza}</raza>
        <edad>${mascota.edad}</edad>
        <personaId>${mascota.personaId}</personaId>
      </Mascota>
    `;
  }

  // Envía la petición POST con XML
  createMascota(mascota: Mascota): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/xml' });
    const xmlMascota = this.convertMascotaToXML(mascota);
    return this.http.post(this.apiUrl, xmlMascota, { headers, responseType: 'text' });
  }

  // Obtiene la lista de mascotas en XML
  getMascotas(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: { 'Accept': 'application/xml' }, responseType: 'text' });
  }
}
