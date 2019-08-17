package com.skilldistillery.qrx.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.qrx.entities.Medication;

public interface MedicationRepository extends JpaRepository<Medication, Integer> {

	List<Medication> findAllByPatient_Id(Integer pid);

	Medication findByIdAndPatient_Id(Integer mid, Integer pid);

}
