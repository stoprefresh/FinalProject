package com.skilldistillery.qrx.services;

import com.skilldistillery.qrx.entities.Patient;

public interface PatientService {

	Patient findByPatient_Id(Integer pid);

}
