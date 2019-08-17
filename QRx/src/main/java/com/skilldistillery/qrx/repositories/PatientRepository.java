package com.skilldistillery.qrx.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.qrx.entities.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer> {

	public Patient findById(int pid);
	public Patient findByUser_Username(String username);
}
