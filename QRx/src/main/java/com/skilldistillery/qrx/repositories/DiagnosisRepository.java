package com.skilldistillery.qrx.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.qrx.entities.Diagnosis;

public interface DiagnosisRepository extends JpaRepository<Diagnosis, Integer>{
	List <Diagnosis> findAllByPatient_Id(Integer pid);
	Diagnosis findAllByIdAndPatient_Id(Integer did, Integer pid);
	
	
	
}
