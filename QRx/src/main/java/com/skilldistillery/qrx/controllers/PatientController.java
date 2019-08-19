package com.skilldistillery.qrx.controllers;

import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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

import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.services.PatientService;

@RestController
@RequestMapping({"api/patients/", "api/patients"})
@CrossOrigin({ "*", "http://localhost:4205" })
public class PatientController {
	
	@Autowired
	private PatientService svc;
	
	@GetMapping() 
	public List<Patient> getAllPatients(){
		return svc.listAllPatients();
	}
	
	@GetMapping("")
	public Patient getPatientById(Principal prince) {
		return svc.findPatientByUsername(prince.getName());	}

	@GetMapping("username/{username}")
	public Patient getPatientByUsername(@PathVariable String username) {
		return svc.findPatientByUsername(username);
	}
	
	@GetMapping(path="index/")
	public Patient patientHome(HttpServletRequest req, HttpServletResponse res, Principal principal) {
	    return svc.index(principal.getName());
	}
	
	@PostMapping("{userId}") 
	public Patient addPatient(@PathVariable int userId, @RequestBody Patient pt) {
		return svc.create(userId, pt);
	}
	
	@PutMapping("{pid}")
	public Patient updatePatient(@PathVariable int pid, @RequestBody Patient pt) {
		return svc.update(pid, pt);
	}
	
	@DeleteMapping("{pid}")
	public void removePatient(@PathVariable int pid, HttpServletResponse resp) {
		if (svc.destroy(pid)) {
			resp.setStatus(204);
		}
		else resp.setStatus(404);
	}

}
