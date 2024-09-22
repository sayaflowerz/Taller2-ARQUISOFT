package com.example.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.back.model.Mascota;

@Repository
public interface MascotaRepository extends JpaRepository<Mascota, Long> {
}
