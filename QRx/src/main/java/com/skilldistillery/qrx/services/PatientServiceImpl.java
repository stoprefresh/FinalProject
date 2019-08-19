package com.skilldistillery.qrx.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.entities.User;
import com.skilldistillery.qrx.repositories.PatientRepository;
import com.skilldistillery.qrx.repositories.UserRepository;

@Service
public class PatientServiceImpl implements PatientService {
	@Autowired
	private PatientRepository ptRepo;
	@Autowired
	private UserRepository uRepo;

	@Override
	public List<Patient> listAllPatients() {
		return ptRepo.findAll();
	}

	@Override
	public Patient searchById(int pid) {
		return ptRepo.findById(pid);
	}

	@Override
	public Patient findPatientByUsername(String username) {
		return ptRepo.findByUser_Username(username);
	}

	@Override
	public Patient create(int userId, Patient pt) {
		System.out.println(pt);
		Optional<User> user = uRepo.findById(userId);
		if (user.isPresent()) {
			pt.setUser(user.get());
			ptRepo.saveAndFlush(pt);
			// if the above doesn't work, try to save and flush user too
		}
		return pt;
	}

	@Override
	public Patient update(int pid, Patient pt) {
		Patient patient = ptRepo.findById(pid);
		if (patient != null) {
			patient.setBirthdate(pt.getBirthdate());
			patient.setDnr(pt.getDnr());
			patient.setSex(pt.getSex());
			patient.setBloodType(pt.getBloodType());
			patient.setHeight(pt.getHeight());
			patient.setWeight(pt.getWeight());
			patient.setQrcode(pt.getQrcode());
			return ptRepo.saveAndFlush(patient);
		} else
			return null;
	}

	@Override
	public Boolean destroy(int pid) {
		Boolean deleted = false;
		try {
			ptRepo.deleteById(pid);
			deleted = true;
		} catch (Exception e) {
			e.printStackTrace();
			deleted = null;
		}
		return deleted;
	}

	@Override
	public Patient index(String username) {
		return ptRepo.findByUser_Username(username);
	}

}
