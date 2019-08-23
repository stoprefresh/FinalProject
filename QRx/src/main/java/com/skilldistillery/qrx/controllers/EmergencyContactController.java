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

	@GetMapping("contacts")
	public List<EmergencyContact> listDiagnosis(Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return ecSvc.index(patient.getId());
	}
	@GetMapping("contacts/{cid}")
	public EmergencyContact show(@PathVariable Integer cid, Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return ecSvc.show(patient.getId(), cid);
	}
	@PostMapping("contacts")
	public EmergencyContact createContact(@RequestBody EmergencyContact contacts, Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return ecSvc.createContact(contacts, patient.getId());
	}
	@PutMapping("contacts/{cid}")
	public EmergencyContact update(@PathVariable Integer cid, @RequestBody EmergencyContact contacts, Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return ecSvc.update(patient.getId(), cid, contacts);
	}
	@DeleteMapping("contacts/{cid}")
	public Boolean destroy(@PathVariable Integer cid, Principal principal) {
		Patient patient = patientSvc.findPatientByUsername(principal.getName());
		return ecSvc.destroy(patient.getId(), cid);

	}
}
