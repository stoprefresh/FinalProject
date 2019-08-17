package com.skilldistillery.qrx.controllers;

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

import com.skilldistillery.qrx.entities.Medication;
import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.services.MedicationService;
import com.skilldistillery.qrx.services.PatientService;

@RestController
@RequestMapping(path = "api/patients")
@CrossOrigin({ "*", "http://localhost:4205" })
public class MedicationController {

	@Autowired
	private PatientService patientSvc;

	@Autowired
	private MedicationService svc;

	@GetMapping(path = "{pid}/medications")
	public List<Medication> getMedications(@PathVariable Integer pid) {
		return svc.getMedications(pid);
	}

	@GetMapping(path = "{pid}/medications/{mid}")
	public Medication getMedicationById(@PathVariable Integer pid, @PathVariable Integer mid, HttpServletResponse resp) {

		Medication medication = svc.getByPatient_IdAndMedication_Id(pid, mid);

		if (medication == null) {
			resp.setStatus(404);
			return null;
		}

		return medication;
	}

	@DeleteMapping("{pid}/medications/{mid}")
	public Boolean deleteMedication(@PathVariable Integer pid, @PathVariable Integer mid, HttpServletRequest req, HttpServletResponse resp) {
		Medication medication = svc.getByPatient_IdAndMedication_Id(pid, mid);
		if (medication != null) {
			try {
				svc.delete(mid);
				return true;
			} catch (Exception e) {
				resp.setStatus(409);
			}
		}
		return false;
	}

	@PostMapping("{pid}/medications")
	public Medication createMedication(@PathVariable Integer pid, @RequestBody Medication medication, HttpServletRequest req, HttpServletResponse resp) {
		if (medication.getPatient() == null) {
			Patient patient = patientSvc.searchById(pid);
			try {
				medication.setPatient(patient);
				svc.create(medication);
				resp.setStatus(201);
				StringBuffer url = req.getRequestURL();
				url.append("/");
				url.append(medication.getId());
				String newAddrURL = url.toString();
				resp.addHeader("Location", newAddrURL);
			} catch (Exception e) {
				resp.setStatus(400);
				medication = null;
			}
		}
		return medication;
	}

	@PutMapping("{pid}/medications/{mid}")
	public Medication replaceMedication(@PathVariable Integer pid, @RequestBody Medication medication, HttpServletRequest req, HttpServletResponse resp) {
		try {
			medication = svc.update(pid, medication);
			resp.setStatus(200);
			StringBuffer url = req.getRequestURL();
			String newAddrURL = url.toString();
			resp.addHeader("URL", newAddrURL);
		} catch (Exception e) {
			resp.setStatus(400);
			medication = null;
		}
		return medication;
	}
}
