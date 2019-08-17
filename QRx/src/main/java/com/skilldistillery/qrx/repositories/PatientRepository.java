package com.skilldistillery.qrx.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skilldistillery.qrx.entities.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
	

}
