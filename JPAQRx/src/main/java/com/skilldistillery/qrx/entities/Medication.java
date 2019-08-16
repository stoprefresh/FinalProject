package com.skilldistillery.qrx.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Medication {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name="patient_id")
	private Patient patient;
	
	@Column(name="medication_name")
	private String medName;
	
	@ManyToOne
	@JoinColumn(name="drug_id")
	private Drug drug;
	
	@Temporal(TemporalType.DATE)
	@Column(name="start_date")
	private Date startDate;
	
	@Column(name="stop_date")
	private Date discontinuedDate;
	
	@Column(name="directions")
	private String directions;
	
	@Column(name="reason_discontinued")
	private String reasonDiscontinued;
	
	@ManyToOne
	@JoinColumn(name="approved_provider_id")
	private ApprovedProvider prescriber;

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

	public String getMedName() {
		return medName;
	}

	public void setMedName(String medName) {
		this.medName = medName;
	}

	public Drug getDrug() {
		return drug;
	}

	public void setDrug(Drug drug) {
		this.drug = drug;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getDiscontinuedDate() {
		return discontinuedDate;
	}

	public void setDiscontinuedDate(Date discontinuedDate) {
		this.discontinuedDate = discontinuedDate;
	}

	public String getDirections() {
		return directions;
	}

	public void setDirections(String directions) {
		this.directions = directions;
	}

	public String getReasonDiscontinued() {
		return reasonDiscontinued;
	}

	public void setReasonDiscontinued(String reasonDiscontinued) {
		this.reasonDiscontinued = reasonDiscontinued;
	}

	public ApprovedProvider getApprovedPrescriber() {
		return prescriber;
	}

	public void setApprovedPrescriber(ApprovedProvider prescriber) {
		this.prescriber = prescriber;
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
		Medication other = (Medication) obj;
		if (id != other.id)
			return false;
		return true;
	}

	public Medication() {
		super();
	}

	
}
