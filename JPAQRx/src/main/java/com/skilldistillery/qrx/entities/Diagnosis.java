package com.skilldistillery.qrx.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "diagnosis")
public class Diagnosis {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name= "patient_id")
	@JsonIgnore
	private Patient patient;
	
	private String name;
	
	@OneToMany
	@JoinColumn(name="diagnosis_id")
	@JsonIgnore
	private List<Medication> medications;
	
	@Column(name="date_diagnosed")
	private String dateDiagnosed;
	
	@Column(name="date_resolved")
	private String dateResolved;
	
	@Column(name="active")
	private Boolean active;
	
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

	public List<Medication> getMedications() {
		return medications;
	}

	public void setMedications(List<Medication> medications) {
		this.medications = medications;
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

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}
	
	
	
	
}
