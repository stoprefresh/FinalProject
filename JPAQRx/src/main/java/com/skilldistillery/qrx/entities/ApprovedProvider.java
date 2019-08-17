package com.skilldistillery.qrx.entities;

import java.util.Date;
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
@Table(name= "approved_provider")
public class ApprovedProvider {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name= "patient_id")	
	@JsonIgnore
	private Patient patient;
	
	@ManyToOne
	@JoinColumn(name= "provider_id")
	private Provider provider;
	
	@OneToMany(mappedBy="prescriber")
	@JsonIgnore
	private List<Medication> medications;
	
	@Column(name="date_approved")
	private Date dateApproved;

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

	public Provider getProvider() {
		return provider;
	}

	public void setProvider(Provider provider) {
		this.provider = provider;
	}

	public Date getDateApproved() {
		return dateApproved;
	}

	public void setDateApproved(Date dateApproved) {
		this.dateApproved = dateApproved;
	}

	public ApprovedProvider() {
		super();
	}

	public ApprovedProvider(int id, Patient patient, Provider provider, Date dateApproved) {
		super();
		this.id = id;
		this.patient = patient;
		this.provider = provider;
		this.dateApproved = dateApproved;
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
		ApprovedProvider other = (ApprovedProvider) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ApprovedPrescriber [id=" + id + ", dateApproved=" + dateApproved + "]";
	}
	

}
