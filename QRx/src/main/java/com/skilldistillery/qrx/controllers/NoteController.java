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
import com.skilldistillery.qrx.entities.PersonalNote;
import com.skilldistillery.qrx.services.NoteService;
import com.skilldistillery.qrx.services.PatientService;

@RestController
@RequestMapping({ "api/patients/", "api/patients" })
@CrossOrigin({ "*", "http://localhost:4205" })
public class NoteController {

	@Autowired
	private PatientService patientSvc;

	@Autowired
	private NoteService svc;

//	LIST	GET		List Notes by PID
	@GetMapping(path = "notes")
	public List<PersonalNote> getNotes(Principal prince) {
		Patient patient = patientSvc.findPatientByUsername(prince.getName());
		return svc.getNotes(patient.getId());
	}

//	READ	GET	 Show PersonalNote by NID
	@GetMapping(path = "notes/{nid}")
	public PersonalNote getNoteById(@PathVariable Integer nid, HttpServletResponse resp, Principal prince) {
		Patient patient = patientSvc.findPatientByUsername(prince.getName());
		PersonalNote note = svc.getByPatient_IdAndNote_Id(patient.getId(), nid);

		if (note == null) {
			resp.setStatus(404);
			return null;
		}

		return note;
	}

//	DELETE	DELETE	Delete PersonalNote
	@DeleteMapping("notes/{nid}")
	public Boolean deleteNote(@PathVariable Integer nid, HttpServletRequest req,
			HttpServletResponse resp, Principal prince) {
		Patient patient = patientSvc.findPatientByUsername(prince.getName());
		PersonalNote note = svc.getByPatient_IdAndNote_Id(patient.getId(), nid);
		if (note != null) {
			try {
				svc.delete(nid);
				return true;
			} catch (Exception e) {
				resp.setStatus(409);
			}
		}
		return false;
	}

// CREATE   PUT     Add PersonalNote	
	@PostMapping("notes")
	public PersonalNote createNote(@RequestBody PersonalNote note, Principal prince) {
		Patient patient = patientSvc.findPatientByUsername(prince.getName());
		note.setPatient(patient);
		svc.create(patient.getId(), note);
		return note;
	}

//	UPDATE	PUT	notes/{nid}	Update PersonalNote
	@PutMapping("notes/{nid}")
	public PersonalNote replaceNote(@PathVariable Integer nid, @RequestBody PersonalNote note, Principal prince) {
		Patient patient = patientSvc.findPatientByUsername(prince.getName());
		PersonalNote managedNote = svc.getByPatient_IdAndNote_Id(patient.getId(), nid);
		managedNote.setTextContent(note.getTextContent());
		managedNote.setMedication(note.getMedication());
		return svc.update(managedNote);
//		return svc.getByPatient_IdAndNote_Id(patient.getId(), nid); // this is requerying DB when don't need to
	}
}
