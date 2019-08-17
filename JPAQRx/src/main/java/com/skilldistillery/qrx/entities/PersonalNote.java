package com.skilldistillery.qrx.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name= "personal_note")
public class PersonalNote {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name= "patient_id")
	@JsonIgnore
	private Patient patient;
	
	@Column(name= "text_content")
	private String textContent;
	
	@CreationTimestamp
	@Column(name="create_date")
	private Date createDate;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="update_date")
	private Date updateDate;
	
	@Column(name="medication_id")
	private int medicationId;
	
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

	public String getTextContent() {
		return textContent;
	}

	public void setTextContent(String textContent) {
		this.textContent = textContent;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Date getUpdateDate() {
		return updateDate;
	}

	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}

	public int getMedicationId() {
		return medicationId;
	}

	public void setMedicationId(int medicationId) {
		this.medicationId = medicationId;
	}

	public PersonalNote() {
		super();
	}

	public PersonalNote(int id, Patient patient, String textContent, Date createDate, Date updateDate,
			int medicationId) {
		super();
		this.id = id;
		this.patient = patient;
		this.textContent = textContent;
		this.createDate = createDate;
		this.updateDate = updateDate;
		this.medicationId = medicationId;
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
		PersonalNote other = (PersonalNote) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "PersonalNote [id=" + id + ", textContent=" + textContent + ", createDate=" + createDate
				+ ", updateDate=" + updateDate + "]";
	}
	
	
	

}
