package com.example.back.DTO;

import com.example.back.model.Persona;

public class MascotaDTO {

    private String nombre;
    private String raza;
    private int edad;

    private int personaId;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getRaza() {
        return raza;
    }

    public void setRaza(String raza) {
        this.raza = raza;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public MascotaDTO(String nombre, String raza, int edad, int personaId) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.personaId = personaId;
    }

    public MascotaDTO() {
    }

    public int getPersonaId() {
        return personaId;
    }

    public void setPersonaId(int personaId) {
        this.personaId = personaId;
    }
}
