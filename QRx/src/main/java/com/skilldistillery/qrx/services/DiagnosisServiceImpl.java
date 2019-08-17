package com.skilldistillery.qrx.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.qrx.entities.Diagnosis;
import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.repositories.DiagnosisRepository;
import com.skilldistillery.qrx.repositories.PatientRepository;

@Service
public class DiagnosisServiceImpl implements DiagnosisService {

	@Autowired
	private DiagnosisRepository diRepo;
	@Autowired
	private PatientRepository pRepo;

	@Override
	public List<Diagnosis> index(Integer pid) {
		return diRepo.findAllByPatient_Id(pid);
	}

	@Override
	public Diagnosis show(Integer did, Integer pid) {
		return diRepo.findAllByIdAndPatient_Id(did, pid);
	}

	@Override
	public Diagnosis createDiagnosis(Diagnosis diagnosis, Integer pid) {
		Patient patient = pRepo.findById(pid);
		if (patient != null) {
			diagnosis.setPatient(patient);
			diRepo.saveAndFlush(diagnosis);
//			patient.getDiagnoses().add(diagnosis);
		}
		return diagnosis;
	}

	@Override
	public Diagnosis update(Integer pid, Integer did, Diagnosis newDiagnosis) {
		Diagnosis diagnosisToUpdate = diRepo.findAllByIdAndPatient_Id(did, pid);
		newDiagnosis.setId(pid);
		newDiagnosis.setPatient(diagnosisToUpdate.getPatient());
		diagnosisToUpdate = diRepo.saveAndFlush(newDiagnosis);
		return newDiagnosis;
	}

	@Override
	public Boolean destroy(Integer pid, Integer did) {
		Diagnosis diagnosis = diRepo.findAllByIdAndPatient_Id(did, pid);
		Boolean deleted = false;
		if (diagnosis != null) {
//				diRepo.delete(diagnosis);
				try {
					diagnosis.setActive(false);
					deleted = true;
				} catch (Exception e) {
					
					e.printStackTrace();
					deleted = null;
				}
			}
		return deleted;
	}

	@Override
	public Diagnosis findById(Integer did) {
		Optional<Diagnosis> diagOpt = diRepo.findById(did);
		if(diagOpt.isPresent()) {
			Diagnosis diagnosis = diagOpt.get();
			return diagnosis;
		}
		return null;
	}

}
