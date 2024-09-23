package com.example.back.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

        @Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
                return http
                                .cors(Customizer.withDefaults()) // Manejo de CORS
                                .csrf(AbstractHttpConfigurer::disable) // Deshabilitar CSRF
                                .authorizeHttpRequests(request -> request
                                                .requestMatchers("/api/personas/**", "/api/mascotas/**").permitAll() // Permitir
                                                                                                                     // todas
                                                                                                                     // las
                                                                                                                     // solicitudes
                                                                                                                     // a
                                                                                                                     // estas
                                                                                                                     // rutas
                                                .anyRequest().permitAll()) // Permitir todas las demás solicitudes
                                .headers(headers -> headers.frameOptions().disable()) // Deshabilitar la configuración
                                                                                      // de seguridad de las cabeceras
                                .build();
        }

        @Bean
        public WebMvcConfigurer corsConfigurer() {
                return new WebMvcConfigurer() {
                        @Override
                        public void addCorsMappings(CorsRegistry registry) {
                                registry.addMapping("/**")
                                                .allowedOrigins("http://localhost:4200")
                                                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
                        }
                };
        }

}
