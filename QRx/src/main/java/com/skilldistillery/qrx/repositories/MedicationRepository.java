package com.skilldistillery.qrx.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.qrx.entities.Medication;
import com.skilldistillery.qrx.entities.Patient;

public interface MedicationRepository extends JpaRepository<Medication, Integer> {

	List<Medication> findAllByPatient_Id(Integer pid);
	
	List<Medication> findAllByPatient_User_username(String username);

	Medication findByIdAndPatient_Id(Integer mid, Integer pid);

	List<Medication> findAllByPatient(Patient patient);

}
