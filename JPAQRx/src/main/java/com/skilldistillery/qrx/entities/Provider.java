package com.skilldistillery.qrx.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name= "provider")
public class Provider {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	
	@OneToOne
	@JoinColumn(name= "user_id")
	private User user;
	
	@Column(name= "organization")
	private String organization;
	
	@Column(name= "subunit")
	private String subunit;
	
	@OneToMany(mappedBy= "provider")
	@JsonIgnore
	private List<ApprovedProvider> patientsApproved;

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

	public String getOrganization() {
		return organization;
	}

	public void setOrganization(String organization) {
		this.organization = organization;
	}

	public String getSubunit() {
		return subunit;
	}

	public void setSubunit(String subunit) {
		this.subunit = subunit;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Provider [id=").append(id).append(", user=").append(user).append(", organization=")
				.append(organization).append(", subunit=").append(subunit).append("]");
		return builder.toString();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((organization == null) ? 0 : organization.hashCode());
		result = prime * result + ((subunit == null) ? 0 : subunit.hashCode());
		result = prime * result + ((user == null) ? 0 : user.hashCode());
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
		Provider other = (Provider) obj;
		if (id != other.id)
			return false;
		if (organization == null) {
			if (other.organization != null)
				return false;
		} else if (!organization.equals(other.organization))
			return false;
		if (subunit == null) {
			if (other.subunit != null)
				return false;
		} else if (!subunit.equals(other.subunit))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}

	public List<ApprovedProvider> getPatientsApproved() {
		return patientsApproved;
	}

	public void setPatientsApproved(List<ApprovedProvider> patientsApproved) {
		this.patientsApproved = patientsApproved;
	}
}
