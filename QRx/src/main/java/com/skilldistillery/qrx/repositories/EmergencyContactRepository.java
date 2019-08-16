package com.skilldistillery.qrx.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.qrx.entities.EmergencyContact;

public interface EmergencyContactRepository extends JpaRepository<EmergencyContact, Integer>{
	Set <EmergencyContact> findById_EmergencyContactId(int id);

}
