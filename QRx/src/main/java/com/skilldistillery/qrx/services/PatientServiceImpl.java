package com.skilldistillery.qrx.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.repositories.PatientRepository;

@Service
public class PatientServiceImpl implements PatientService{
	
	@Autowired
	private PatientRepository repo;

	@Override
	public Patient findByPatient_Id(Integer pid) {
		Optional<Patient> patient = repo.findById(pid);
		if (patient.isPresent()) {
			return patient.get();
		}
		return null;
	}


}
