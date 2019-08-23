package com.skilldistillery.qrx.controllers;

import java.security.Principal;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.entities.User;
import com.skilldistillery.qrx.services.PatientService;
import com.skilldistillery.qrx.services.UserService;

@RestController
@RequestMapping({"api/patients/", "api/patients"})
@CrossOrigin({ "*", "http://localhost:4205" })
public class PatientController {
	
	@Autowired
	private PatientService svc;
	
	@Autowired
	private UserService userSvc;
	
//	@GetMapping() 
//	public List<Patient> getAllPatients(){
//		return svc.listAllPatients();
//	}
	
	@GetMapping()
	public Patient getPatientByUsername(Principal prince) {
		return svc.findPatientByUsername(prince.getName());	}

	@GetMapping("username/{username}")
	public Patient getPatientByUsername(@PathVariable String username, Principal principal) {
		User user = userSvc.findByUsername(principal.getName());
		if (user.getRole().equals("ems") ) {
			System.out.println(svc.findPatientByUsername(username).toString());
		return svc.findPatientByUsername(username);
		} 
		return null;
	}
	
	@GetMapping(path="index/")
	public Patient patientHome(HttpServletRequest req, HttpServletResponse res, Principal principal) {
	    return svc.index(principal.getName());
	}
	
	@PostMapping("") 
	public Patient addPatient(@RequestBody Patient pt, Principal principal) {
		User user = userSvc.findByUsername(principal.getName());
		System.out.println(user);
		System.out.println(pt);
		return svc.create(user.getId(), pt);
	}
	
	@PutMapping("{pid}")
	public Patient updatePatient(@RequestBody Patient pt, Principal principal) {
		Patient patient = svc.findPatientByUsername(principal.getName());
		return svc.update(patient.getId(), pt);
	}
	

}
