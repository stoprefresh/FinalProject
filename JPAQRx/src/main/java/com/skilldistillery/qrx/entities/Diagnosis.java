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
	
	@Column(name="medication_id")
	private int medicationId;
	
	@Column(name="date_diagnosed")
	private String dateDiagnosed;
	
	@Column(name="date_resolved")
	private String dateResolved;
	
	@Column(name="icd_10")
	private String icd10;
	
	
	public Diagnosis() {
		super();
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getMedicationId() {
		return medicationId;
	}


	public void setMedicationId(int medicationId) {
		this.medicationId = medicationId;
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


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dateDiagnosed == null) ? 0 : dateDiagnosed.hashCode());
		result = prime * result + ((dateResolved == null) ? 0 : dateResolved.hashCode());
		result = prime * result + ((icd10 == null) ? 0 : icd10.hashCode());
		result = prime * result + id;
		result = prime * result + medicationId;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		if (dateDiagnosed == null) {
			if (other.dateDiagnosed != null)
				return false;
		} else if (!dateDiagnosed.equals(other.dateDiagnosed))
			return false;
		if (dateResolved == null) {
			if (other.dateResolved != null)
				return false;
		} else if (!dateResolved.equals(other.dateResolved))
			return false;
		if (icd10 == null) {
			if (other.icd10 != null)
				return false;
		} else if (!icd10.equals(other.icd10))
			return false;
		if (id != other.id)
			return false;
		if (medicationId != other.medicationId)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}


	public Diagnosis(int id, int patientId, String name, int medicationId, String dateDiagnosed, String dateResolved,
			String icd10) {
		super();
		this.id = id;
		this.name = name;
		this.medicationId = medicationId;
		this.dateDiagnosed = dateDiagnosed;
		this.dateResolved = dateResolved;
		this.icd10 = icd10;
	}


	@Override
	public String toString() {
		return "Diagnosis [name=" + name + "]";
	}
	
	
}
