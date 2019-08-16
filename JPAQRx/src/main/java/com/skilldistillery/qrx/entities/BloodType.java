package com.skilldistillery.qrx.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BloodType {
	
	//FIELDS
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String abo;
	
	private boolean rh;

	// CTOR
	public BloodType() {
		super();
	}

	public BloodType(int id, String abo, boolean rh) {
		super();
		this.id = id;
		this.abo = abo;
		this.rh = rh;
	}

	// METHODS
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAbo() {
		return abo;
	}

	public void setAbo(String abo) {
		this.abo = abo;
	}

	public boolean isRh() {
		return rh;
	}

	public void setRh(boolean rh) {
		this.rh = rh;
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
		BloodType other = (BloodType) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "BloodType [id=" + id + ", abo=" + abo + ", rh=" + rh + "]";
	}
	
	
	
	
	
	

}
