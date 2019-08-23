package com.skilldistillery.qrx.controllers;

import java.security.Principal;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
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
@RequestMapping({"api/patients/", "api/patients"})
@CrossOrigin({ "*", "http://localhost:4205" })
public class MedicationController {

	@Autowired
	private PatientService patientSvc;

	@Autowired
	private MedicationService svc;

	@GetMapping(path = "medications")
	public List<Medication> getMedications(HttpServletRequest req, HttpServletResponse res, Principal prince) {
		return svc.findAllByUsername(prince.getName());
	}
	
	@GetMapping(path = "medications/{mid}")
	public Medication getMedicationById(@PathVariable Integer mid, HttpServletResponse resp, Principal prince) {
		Patient patient = patientSvc.findPatientByUsername(prince.getName());
		Medication medication = svc.getByPatient_IdAndMedication_Id(patient.getId(), mid);

		if (medication == null) {
			resp.setStatus(404);
			return null;
		}

		return medication;
	}

	@DeleteMapping("medications/{mid}")
	public Boolean deleteMedication(@PathVariable Integer mid, HttpServletRequest req, HttpServletResponse resp, Principal prince) {
		Patient patient = patientSvc.findPatientByUsername(prince.getName());
		Medication medication = svc.getByPatient_IdAndMedication_Id(patient.getId(), mid);
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

	@PostMapping("medications")
	public Medication createMedication(@RequestBody Medication medication, HttpServletRequest req, HttpServletResponse resp, Principal prince) {
		if (medication.getPatient() == null) {
			Patient patient = patientSvc.findPatientByUsername(prince.getName());
			if (medication.getStartDate() == null) {
				DateFormat df = new SimpleDateFormat("yyyy/MM/dd HH:mm");
				Calendar calObj = Calendar.getInstance();
				try {
					Date startDate = df.parse(df.format(calObj.getTime()));
					calObj.setTime(startDate);
					calObj.add(Calendar.HOUR_OF_DAY, 1);
					medication.setStartDate(calObj.getTime());
					System.err.println(medication.getStartDate());
				} catch (ParseException e) {
					e.printStackTrace();
				}
			}
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

	@PutMapping("medications/{mid}")
	public Medication replaceMedication(@PathVariable Integer mid, @RequestBody Medication medication, Principal prince) {
		Patient patient = patientSvc.findPatientByUsername(prince.getName());
		Medication med = svc.getByPatient_IdAndMedication_Id(patient.getId(), mid);
		if (med != null) {
			medication.setPatient(patient);
			medication = svc.update(med.getId(), medication);
			return medication;
		} 
		return null;
	}
}
