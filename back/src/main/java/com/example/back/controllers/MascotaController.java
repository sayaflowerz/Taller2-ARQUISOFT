package com.example.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import com.example.back.DTO.MascotaDTO;
import com.example.back.model.Mascota;
import com.example.back.model.Persona;
import com.example.back.services.MascotaService;
import com.example.back.services.PersonaService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/mascotas")
public class MascotaController {

    @Autowired
    private MascotaService mascotaService;
    @Autowired
    private PersonaService personaService;

    @PostMapping(consumes = MediaType.APPLICATION_XML_VALUE, produces = MediaType.APPLICATION_XML_VALUE)
    public ResponseEntity<Mascota> createMascota(@RequestBody MascotaDTO mascota) {
        Persona p = personaService.findById((long) mascota.getPersonaId()).get();
        Mascota nuevaMascota = new Mascota(mascota.getNombre(), mascota.getRaza(), mascota.getEdad(), p);
        mascotaService.save(nuevaMascota);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevaMascota);
    }

    @GetMapping(produces = "application/xml")
    public List<MascotaDTO> getAllMascotas() {
        List<Mascota> mascotas = mascotaService.findAll();
        List<MascotaDTO> mascotasDTO = new ArrayList<>();
        for (Mascota m : mascotas) {
            mascotasDTO.add(
                    new MascotaDTO(m.getNombre(), m.getRaza(), m.getEdad(), (int) m.getPersona().getId().intValue()));
        }
        return mascotasDTO;
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_XML_VALUE)
    public ResponseEntity<Mascota> getMascotaById(@PathVariable Long id) {
        return mascotaService.findById(id)
                .map(mascota -> ResponseEntity.ok().body(mascota))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMascota(@PathVariable Long id) {
        return mascotaService.findById(id)
                .map(mascota -> {
                    mascotaService.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
