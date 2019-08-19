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

import com.skilldistillery.qrx.entities.EmergencyContact;
import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.services.EmergencyContactService;
import com.skilldistillery.qrx.services.PatientService;

@RestController
@RequestMapping("api/patients")
@CrossOrigin({ "*", "http://localhost:4205" })
public class EmergencyContactController {

	@Autowired
	private EmergencyContactService ecSvc;
	
	@Autowired
	private PatientService patientSvc;

//	LIST	GET	/api/patients/contacts/	List EmergencyContact
	@GetMapping("contacts")
	public List<EmergencyContact> listDiagnosis(Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return ecSvc.index(patient.getId());
	}

//	READ	GET	/api/patients/contacts/{did}/	Show EmergencyContact
	@GetMapping("contacts/{did}")
	public EmergencyContact show(@PathVariable Integer did, Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return ecSvc.show(patient.getId(), did);
	}

//	CREATE	POST	/api/patients/contacts/	Add EmergencyContact
	@PostMapping("contacts")
	public EmergencyContact createContact(@RequestBody EmergencyContact contacts, Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return ecSvc.createContact(contacts, patient.getId());
	}

//	UPDATE	PUT	/api/patients/contacts/{did}/	Update EmergencyContact
	@PutMapping("contacts/{did}")
	public EmergencyContact update(@PathVariable Integer did, @RequestBody EmergencyContact contacts, Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return ecSvc.update(patient.getId(), did, contacts);
	}

//	DELETE	DELETE	/api/patients/contacts/{did}/	Delete EmergencyContact
	@DeleteMapping("contacts/{did}")
	public Boolean destroy(@PathVariable Integer did, Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return ecSvc.destroy(patient.getId(), did);

	}
}
