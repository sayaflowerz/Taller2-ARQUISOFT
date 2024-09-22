import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../model/mascota';


@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private apiUrl = 'http://localhost:8080/mascotas';

  constructor(private http: HttpClient) {}

  convertMascotaToXML(mascota: Mascota): string {
    const xmlMascota = `<mascota>
                          <nombre>${mascota.nombre}</nombre>
                          <raza>${mascota.raza}</raza>
                          <edad>${mascota.edad}</edad>
                          <personaId>${mascota.personaId}</personaId>
                        </mascota>`;
    return xmlMascota;
  }
  
  createMascota(mascota: Mascota): Observable<Mascota> {
    const xmlMascota = this.convertMascotaToXML(mascota);
    return this.http.post<Mascota>(this.apiUrl, xmlMascota, { 
      headers: { 'Content-Type': 'application/xml' } 
    });
  }

  getMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.apiUrl, { 
      headers: { 'Accept': 'application/xml' } 
    });
  }
  
  
}
