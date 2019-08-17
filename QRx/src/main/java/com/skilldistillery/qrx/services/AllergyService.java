package com.skilldistillery.qrx.services;

import java.util.List;

import com.skilldistillery.qrx.entities.Allergy;

public interface AllergyService {
	public List<Allergy> index(Integer pid);

	public Allergy show(Integer aid, Integer pid);

	public Allergy createAllergy(Allergy allergy, Integer aid);

	public Allergy update(Integer pid, Integer aid, Allergy allergy);

	public Boolean destroy(Integer pid, Integer aid);

	public Allergy findById(Integer id);
}
