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

import com.skilldistillery.qrx.entities.Allergy;
import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.services.AllergyService;
import com.skilldistillery.qrx.services.PatientService;

@RestController
@RequestMapping({"api/patients/", "api/patients"})
@CrossOrigin({ "*", "http://localhost:4205" })
public class AllergyController {

	String name;

	@Autowired
	private AllergyService aSvc;
	
	@Autowired
	private PatientService patientSvc;

//	LIST	GET	/api/patients/allergies/	List Allergies
	@GetMapping("allergies")
	public List<Allergy> listAllergy(Principal prince) {
		Patient patient = patientSvc.findPatientByUsername(prince.getName());
		return aSvc.index(patient.getId());
	}

//	READ	GET	/api/patients/allergies/{aid}/	Show Allergy
	@GetMapping("allergies/{aid}")
	public Allergy show(@PathVariable Integer aid, Principal prince) {
		Allergy allergy = new Allergy();
		Patient patient = patientSvc.findPatientByUsername(prince.getName());
		allergy = aSvc.show(aid, patient.getId());
		return allergy;
	}

//	CREATE	POST	/api/patients/allergies/	Add Allergy
	@PostMapping("allergies")
	public Allergy createAllergy(@RequestBody Allergy allergy, Principal prince) {
		Patient patient = patientSvc.findPatientByUsername(prince.getName());
		return aSvc.createAllergy(allergy, patient.getId());
	}

//	UPDATE	PUT	/api/patients/allergies/{aid}/	Update Allergy
	@PutMapping("allergies/{aid}")
	public Allergy update(@PathVariable Integer aid, @RequestBody Allergy allergy, Principal prince) {
		Patient patient = patientSvc.findPatientByUsername(prince.getName());
		return aSvc.update(patient.getId(), aid, allergy);
	}

//	DELETE	DELETE	/api/patients/allergies/{aid}/	Delete Allergy
	@DeleteMapping("allergies/{aid}")
	public Boolean destroy(@PathVariable Integer aid, Principal prince) {
		Patient patient = patientSvc.findPatientByUsername(prince.getName());
		return aSvc.destroy(aid, patient.getId());
	}
}
