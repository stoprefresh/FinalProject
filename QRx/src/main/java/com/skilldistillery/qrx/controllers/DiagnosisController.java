package com.skilldistillery.qrx.controllers;

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
import com.skilldistillery.qrx.services.DiagnosisService;

@RestController
@RequestMapping("api/patients")
@CrossOrigin({ "*", "http://localhost:4205" })
public class DiagnosisController {

	@Autowired
	private DiagnosisService diSvc;

//	LIST	GET	/api/patients/{pid}/diagnosis/	List Diagnosis
	@GetMapping("/{pid}/diagnosis")
	public List<Diagnosis> listDiagnosis(@PathVariable Integer pid) {
		return diSvc.index(pid);
	}

//	READ	GET	/api/patients/{pid}/diagnosis/{did}/	Show Diagnosis
	@GetMapping("/{pid}/diagnosis/{did}")
	public Diagnosis show(@PathVariable Integer pid, @PathVariable Integer did) {
		return diSvc.show(pid, did);
	}

//	CREATE	POST	/api/patients/{pid}/diagnosis/	Add Diagnosis
	@PostMapping("/{pid}/diagnosis/{did}")
	public Diagnosis createDiagnosis(@RequestBody Diagnosis diagnosis, @PathVariable Integer pid) {
		return diSvc.createDiagnosis(diagnosis, pid);
	}

//	UPDATE	PUT	/api/patients/{pid}/diagnosis/{did}/	Update Diagnosis
	@PutMapping("/{pid}/diagnosis/{did}")
	public Diagnosis update(@PathVariable Integer pid, @PathVariable Integer did, @RequestBody Diagnosis diagnosis) {
		return diSvc.update(pid, did, diagnosis);
	}

//	DELETE	DELETE	/api/patients/{pid}/diagnosis/{did}/	Delete Diagnosis
	@DeleteMapping("/{pid}/diagnosis/{did}")
	public Boolean destroy(@PathVariable Integer pid, @PathVariable Integer did) {
		return diSvc.destroy(pid, did);

	}
}
