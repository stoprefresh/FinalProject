package com.skilldistillery.qrx.controllers;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.qrx.entities.Diagnosis;
import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.services.DiagnosisService;
import com.skilldistillery.qrx.services.PatientService;

@RestController
@RequestMapping("api/patients")
@CrossOrigin({ "*", "http://localhost:4205" })
public class DiagnosisController {

	@Autowired
	private DiagnosisService diSvc;
	
	@Autowired
	private PatientService patientSvc;

//	LIST	GET	/api/patients/diagnosis/	List Diagnosis
	@GetMapping("diagnosis")
	public List<Diagnosis> listDiagnosis(Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return diSvc.index(patient.getId());
	}

//	READ	GET	/api/patients/diagnosis/{did}/	Show Diagnosis
	@GetMapping("diagnosis/{did}")
	public Diagnosis show(@PathVariable Integer did, Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return diSvc.show(patient.getId(), did);
	}

//	CREATE	POST	/api/patients/diagnosis/	Add Diagnosis
	@PostMapping("diagnosis")
	public Diagnosis createDiagnosis(@RequestBody Diagnosis diagnosis, Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return diSvc.createDiagnosis(diagnosis, patient.getId());
	}

//	UPDATE	PUT	/api/patients/diagnosis/{did}/	Update Diagnosis
	@PutMapping("diagnosis/{did}")
	public Diagnosis update(@PathVariable Integer did, @RequestBody Diagnosis diagnosis, Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return diSvc.update(patient.getId(), did, diagnosis);
	}

//	DELETE	DELETE	/api/patients/diagnosis/{did}/	Delete Diagnosis
	@DeleteMapping("diagnosis/{did}")
	public Boolean destroy(@PathVariable Integer did, Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return diSvc.destroy(patient.getId(), did);

	}
}
