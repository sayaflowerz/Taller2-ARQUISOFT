package com.example.back.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import com.example.back.model.Persona;
import com.example.back.model.Mascota;
import com.example.back.repository.PersonaRepository;
import com.example.back.repository.MascotaRepository;

@Component
public class DataLoader {

    @Bean
    CommandLineRunner initDatabase(PersonaRepository personaRepository, MascotaRepository mascotaRepository) {
        return args -> {
            // Insertar personas
            Persona juan = new Persona(1L, "Juan", 25);
            Persona ana = new Persona(2L, "Ana", 30);
            Persona pedro = new Persona(3L, "Pedro", 40);
            personaRepository.save(juan);
            personaRepository.save(ana);
            personaRepository.save(pedro);

            // Insertar mascotas asociadas a personas
            mascotaRepository.save(new Mascota("Firulais", "Perro", 5, juan));
            mascotaRepository.save(new Mascota("Michi", "Gato", 3, ana));
            mascotaRepository.save(new Mascota("Paco", "Perro", 7, pedro));
        };
    }
}
