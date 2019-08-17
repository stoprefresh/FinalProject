package com.skilldistillery.qrx.services;

import java.util.List;

import com.skilldistillery.qrx.entities.Patient;

public interface PatientService {

	/*
	 *  LIST	GET		/api/patients/			List Patients
		CREATE	POST	/api/patients/			Add Patient
		READ	GET		/api/patients/{pid}/	Show Patient
		UPDATE	PUT		/api/patients/{pid}/	Update Patient
		DELETE	DELETE	/api/patients/{pid}/	Delete Patient
	 */
	
	public List<Patient> listAllPatients();

	public Patient create(int userId, Patient pt);

	public Patient searchById(int pid);

    public Patient update(int pid, Patient pt);

    public Boolean destroy(int pid);

	public Patient findPatientByUsername(String username);

}
