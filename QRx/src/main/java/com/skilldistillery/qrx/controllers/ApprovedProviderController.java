package com.skilldistillery.qrx.controllers;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.qrx.entities.ApprovedProvider;
import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.services.ApprovedProviderService;
import com.skilldistillery.qrx.services.PatientService;
import com.skilldistillery.qrx.services.UserService;

@RestController
@CrossOrigin({ "*", "http://localhost:4205" })
@RequestMapping("api/approved/")
public class ApprovedProviderController {

	@Autowired
	private ApprovedProviderService providerSvc;
	
	@Autowired
	private PatientService patientSvc;
	
	@Autowired
	private UserService userSvc;

	@GetMapping("providers")
	public List<ApprovedProvider> getProviders(Principal principal) {
		return providerSvc.findProvidersByPatient_Id(userSvc.findByUsername(principal.getName()).getPatient().getId());
	}
	
	@PostMapping()
	public ApprovedProvider create(@RequestBody ApprovedProvider provider, Principal prince) {
		Patient patient = patientSvc.findPatientByUsername(prince.getName());
		provider.setPatient(patient);
		return providerSvc.create(provider);
	}


}
