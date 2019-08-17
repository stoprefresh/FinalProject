package com.skilldistillery.qrx.services;

import java.util.List;

import com.skilldistillery.qrx.entities.Diagnosis;

public interface DiagnosisService {
	
	public List<Diagnosis> index(Integer pid);

	public Diagnosis show(Integer pid, Integer did);

	public Diagnosis createDiagnosis(Diagnosis diagnosis, Integer pid);

	public Diagnosis update(Integer pid, Integer did, Diagnosis diagnosis);

	public Boolean destroy(Integer pid, Integer did);

	public Diagnosis findById(Integer id);
}
