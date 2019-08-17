package com.skilldistillery.qrx.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.qrx.entities.Allergy;

public interface AllergyRepository extends JpaRepository<Allergy, Integer>{
	List <Allergy> findAllByPatient_Id(Integer pid);
	Allergy findAllByIdAndPatient_Id(Integer aid, Integer pid);
	
}
