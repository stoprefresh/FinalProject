package com.skilldistillery.qrx.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.qrx.entities.Drug;

public interface DrugRepository extends JpaRepository<Drug, Integer>{

	public List<Drug> findByProprietaryName(String brandName);
	
	public List<Drug> findByGenericName(String genericName);
}
