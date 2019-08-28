package com.skilldistillery.qrx.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity	
public class Drug {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
//	@OneToMany(mappedBy= "drug")
//	@JsonIgnore
//	private List<Medication> medications;
	
	@Column(name="product_id")
	private String productid;
	
	@Column(name="product_ndc")
	private String productNdc;
	
	@Column(name="product_type_name")
	private String productTypeName;
	
	@Column(name="proprietary_name")
	private String proprietaryName;
	
	@Column(name="proprietary_name_suffix")
	private String propNameSuffix;
	
	@Column(name="nonproprietary_name")
	private String genericName;
	
	@Column(name="dosage_form_name")
	private String dosageForm;
	
	@Column(name="route_name")
	private String routeName;

	@Column(name="active_numerator_strength")
	private String strength;
	
	@Column(name="active_ingredient_unit")
	private String unit;
	
	@Column(name="pharm_classes")
	private String pharmClasses;
	
	@Column(name="img_url")
	private String imgUrl;
	
	@Column(name="reference_url")
	private String referenceUrl;

	public int getId() {
		return id;
	}

	public String getProductid() {
		return productid;
	}

	public String getProductNdc() {
		return productNdc;
	}

	public String getProductTypeName() {
		return productTypeName;
	}

	public String getProprietaryName() {
		return proprietaryName;
	}

	public String getPropNameSuffix() {
		return propNameSuffix;
	}

	public String getGenericName() {
		return genericName;
	}

	public String getDosageForm() {
		return dosageForm;
	}

	public String getRouteName() {
		return routeName;
	}

	public String getStrength() {
		return strength;
	}

	public String getUnit() {
		return unit;
	}

	public String getPharmClasses() {
		return pharmClasses;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public String getReferenceUrl() {
		return referenceUrl;
	}

	@Override
	public String toString() {
		return "Drug [id=" + id + ", genericName=" + genericName + ", dosageForm=" + dosageForm + ", routeName="
				+ routeName + ", strength=" + strength + ", unit=" + unit + "]";
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
		Drug other = (Drug) obj;
		if (id != other.id)
			return false;
		return true;
	}

	public Drug() {
		super();
	}
	
	
	
}
