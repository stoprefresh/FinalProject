package com.skilldistillery.qrx.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.qrx.entities.Diagnosis;

public interface DiagnosisRepository extends JpaRepository<Diagnosis, Integer>{

}
