package com.skilldistillery.qrx.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.qrx.entities.Allergy;
import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.repositories.AllergyRepository;
import com.skilldistillery.qrx.repositories.PatientRepository;

@Service
public class AllergyServiceImpl implements AllergyService{

	@Autowired
	private AllergyRepository aRepo;
	@Autowired
	private PatientRepository pRepo;
	
	@Override
	public List<Allergy> index(Integer pid) {
		return aRepo.findAllByPatient_Id(pid);
	}
	@Override
	public Allergy show(Integer aid, Integer pid) {
		return aRepo.findAllByIdAndPatient_Id(aid, pid);
	}
	
	@Override
	public Allergy createAllergy(Allergy allergy, Integer pid) {
		Optional<Patient> patient = pRepo.findById(pid);
		if (patient.isPresent()) {
			allergy.setPatient(patient.get());
			aRepo.saveAndFlush(allergy);
		}
		return allergy;
	}
	
	@Override
	public Allergy update(Integer pid, Integer aid, Allergy newAllergy) {
		Allergy allergyToUpdate = aRepo.findAllByIdAndPatient_Id(aid, pid);
		newAllergy.setId(pid);
		newAllergy.setPatient(allergyToUpdate.getPatient());
		allergyToUpdate = aRepo.saveAndFlush(newAllergy);
		return newAllergy;
	}
	
	@Override
	public Boolean destroy(Integer pid, Integer aid) {
		Allergy allergy = aRepo.findAllByIdAndPatient_Id(aid, pid);
		Boolean deleted = false;
		if (allergy != null) {
				try {
					allergy.setActive(false);
					deleted = true;
				} catch (Exception e) {
					
					e.printStackTrace();
					deleted = null;
				}
			}
		return deleted;
	}
	
	@Override
	public Allergy findById(Integer aid) {
		Optional<Allergy> aOpt = aRepo.findById(aid);
		if(aOpt.isPresent()) {
			Allergy allergy = aOpt.get();
			return allergy;
		}
		return null;
	}
}
