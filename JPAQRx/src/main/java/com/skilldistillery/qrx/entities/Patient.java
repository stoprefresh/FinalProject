package com.skilldistillery.qrx.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;	

	private User user;
	
	@Column(name="qrcode_url")
	private String qrcode;
	
	@Column(name="has_dnr")
	private Boolean dnr;
	
	@Column(name="birth_date")
	private Date birthdate;
	
	@Column(name="anatomical_sex")
	private String sex;
	
	@Column(name="height_inches")
	private Double height;
	
	@Column(name="weight_lbs")
	private Double weight;
	
	@JoinColumn(name="blood_type_id")
	private Bloodtype bloodtype;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getQrcode() {
		return qrcode;
	}

	public void setQrcode(String qrcode) {
		this.qrcode = qrcode;
	}

	public Boolean getDnr() {
		return dnr;
	}

	public void setDnr(Boolean dnr) {
		this.dnr = dnr;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public Double getHeight() {
		return height;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public Bloodtype getBloodtype() {
		return bloodtype;
	}

	public void setBloodtype(Bloodtype bloodtype) {
		this.bloodtype = bloodtype;
	}

	@Override
	public String toString() {
		return "Patient [id=" + id + ", qrcode=" + qrcode + ", dnr=" + dnr + ", birthdate=" + birthdate + ", sex=" + sex
				+ ", height=" + height + ", weight=" + weight + "]";
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
		Patient other = (Patient) obj;
		if (id != other.id)
			return false;
		return true;
	}

	public Patient() {
		super();
	}
	
	
	
	
}
