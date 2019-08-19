package com.skilldistillery.qrx.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.qrx.entities.EmergencyContact;
import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.repositories.EmergencyContactRepository;
import com.skilldistillery.qrx.repositories.PatientRepository;

@Service
public class EmergencyContactServiceImpl implements EmergencyContactService{

	@Autowired
	private EmergencyContactRepository ecRepo;
	@Autowired
	private PatientRepository pRepo;
	
	@Override
	public List<EmergencyContact> index(Integer pid) {
		return ecRepo.findAllByPatient_Id(pid);
	}

	@Override
	public EmergencyContact show(Integer pid, Integer did) {
		return ecRepo.findByIdAndPatient_Id(did, pid);
	}

	@Override
	public EmergencyContact createContact(EmergencyContact contact, Integer pid) {
		Optional<Patient> patient = pRepo.findById(pid);
		if (patient.isPresent()) {
			contact.setPatient(patient.get());
			ecRepo.saveAndFlush(contact);
		}
		return contact;
	}

	@Override
	public EmergencyContact update(Integer pid, Integer did, EmergencyContact contact) {
		EmergencyContact managed = ecRepo.findByIdAndPatient_Id(did, pid);
		contact.setId(did);
		contact.setPatient(managed.getPatient());
		managed = ecRepo.saveAndFlush(managed);
		return managed;
	}

	@Override
	public Boolean destroy(Integer pid, Integer did) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EmergencyContact findById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

}
