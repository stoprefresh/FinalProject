package com.skilldistillery.qrx.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.qrx.entities.Medication;
import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.repositories.MedicationRepository;
import com.skilldistillery.qrx.repositories.PatientRepository;

@Service
public class MedicationServiceImpl implements MedicationService{

	@Autowired
	MedicationRepository repo;
	@Autowired
	PatientRepository patRepo;
	
	@Override
	public List<Medication> getMedications(Integer pid) {
		return repo.findAllByPatient_Id(pid);
	}

	@Override
	public Medication getByPatient_IdAndMedication_Id(Integer pid, Integer mid) {
		return repo.findByIdAndPatient_Id(mid, pid);
	}

	@Override
	public void delete(Integer id) {
		repo.deleteById(id);
	}

	@Override
	public Medication create(Medication medication) {
		return repo.saveAndFlush(medication);
	}

	@Override
	public Medication update(Integer mid, Medication medication) {
		medication.setId(mid);
		return repo.saveAndFlush(medication);
	}

	@Override
	public List<Medication> findAllByUsername(String username) {
		Patient patient = patRepo.findByUser_Username(username);
		return repo.findAllByPatient(patient);
	}

}
