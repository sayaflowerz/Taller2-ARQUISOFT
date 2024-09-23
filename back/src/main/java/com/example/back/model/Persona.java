package com.example.back.model;

import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // O la estrategia que prefieras
    private Long id;

    @Column(name = "nombre", nullable = false)
    private String nombre;
    @Column(name = "edad", nullable = false)
    private int edad;

    // Getters y Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public Persona(Long id, String nombre, int edad) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }

    public Persona() {
    }
}
