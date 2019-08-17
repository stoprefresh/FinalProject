package com.skilldistillery.qrx.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.entities.PersonalNote;
import com.skilldistillery.qrx.repositories.NoteRepository;
import com.skilldistillery.qrx.repositories.PatientRepository;

@Service
public class NoteServiceImpl implements NoteService {
	
	@Autowired
	private NoteRepository repo;
	
	@Autowired
	private PatientRepository patientRepo;

	@Override
	public List<PersonalNote> getNotes(Integer pid) {
		return repo.findAllByPatient_Id(pid);
	}

	@Override
	public PersonalNote getByPatient_IdAndNote_Id(Integer pid, Integer nid) {
		return repo.findByIdAndPatient_Id(nid,pid);
	}

	@Override
	public void delete(Integer nid) {
		repo.deleteById(nid);
	}

	@Override
	public PersonalNote create(Integer pid, PersonalNote note) {
		Optional <Patient> patient = patientRepo.findById(pid);
		if (patient.isPresent()) {
			note.setPatient(patient.get());
		}
		return repo.saveAndFlush(note);
	}

	@Override
	public PersonalNote update(Integer nid, PersonalNote note) {
		note.setId(nid);
		return repo.saveAndFlush(note);
	}

}
