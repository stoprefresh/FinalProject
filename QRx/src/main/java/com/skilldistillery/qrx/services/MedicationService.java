package com.skilldistillery.qrx.services;

import java.util.List;

import com.skilldistillery.qrx.entities.Medication;

public interface MedicationService {

	List<Medication> getMedications(Integer pid);

	Medication getByPatient_IdAndMedication_Id(Integer pid, Integer mid);

	void delete(Integer id);

	Medication create(Medication medication);

	Medication update(Integer mid, Medication medication);

}
