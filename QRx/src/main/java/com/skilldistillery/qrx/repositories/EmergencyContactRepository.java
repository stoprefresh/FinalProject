package com.skilldistillery.qrx.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.qrx.entities.EmergencyContact;

public interface EmergencyContactRepository extends JpaRepository<EmergencyContact, Integer>{

}
