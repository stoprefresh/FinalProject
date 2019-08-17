package com.skilldistillery.qrx.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.qrx.entities.Medication;
import com.skilldistillery.qrx.repositories.MedicationRepository;

@Service
public class MedicationServiceImpl implements MedicationService{

	@Autowired
	MedicationRepository repo;
	
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
	public Medication update(Integer id, Medication medication) {
		medication.setId(id);
		return repo.saveAndFlush(medication);
	}

}
