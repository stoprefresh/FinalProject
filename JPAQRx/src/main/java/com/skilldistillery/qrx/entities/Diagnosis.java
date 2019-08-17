package com.skilldistillery.qrx.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "diagnosis")
public class Diagnosis {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name= "patient_id")
	private Patient patient;
	
	private String name;
	
	@ManyToOne
	@JoinColumn(name="medication_id")
	private Medication medication;
	
	@Column(name="date_diagnosed")
	private String dateDiagnosed;
	
	@Column(name="date_resolved")
	private String dateResolved;
	
	@Column(name="icd_10")
	private String icd10;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Medication getMedication() {
		return medication;
	}

	public void setMedication(Medication medication) {
		this.medication = medication;
	}

	public String getDateDiagnosed() {
		return dateDiagnosed;
	}

	public void setDateDiagnosed(String dateDiagnosed) {
		this.dateDiagnosed = dateDiagnosed;
	}

	public String getDateResolved() {
		return dateResolved;
	}

	public void setDateResolved(String dateResolved) {
		this.dateResolved = dateResolved;
	}

	public String getIcd10() {
		return icd10;
	}

	public void setIcd10(String icd10) {
		this.icd10 = icd10;
	}

	public Diagnosis() {
		super();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Diagnosis other = (Diagnosis) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Diagnosis [id=" + id + ", patient=" + patient + ", name=" + name + ", dateDiagnosed=" + dateDiagnosed
				+ ", dateResolved=" + dateResolved + ", icd10=" + icd10 + "]";
	}
	
	
	
	
}
