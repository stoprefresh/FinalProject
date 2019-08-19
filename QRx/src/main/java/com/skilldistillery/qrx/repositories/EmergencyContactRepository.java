package com.skilldistillery.qrx.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skilldistillery.qrx.entities.EmergencyContact;

@Repository
public interface EmergencyContactRepository extends JpaRepository<EmergencyContact, Integer>{
	
	List <EmergencyContact> findAllByPatient_Id(Integer pid);
	EmergencyContact findByIdAndPatient_Id(Integer cid, Integer pid);


}
