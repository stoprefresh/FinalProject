package com.skilldistillery.qrx.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.qrx.entities.Drug;
import com.skilldistillery.qrx.repositories.DrugRepository;

@Service
public class DrugServiceImpl implements DrugService{
	@Autowired
	private DrugRepository drugRepo;
	
	@Override
	public List<Drug> findAllDrugs() {
		return drugRepo.findAll();
	}

	@Override
	public Drug show(int did) {
		Optional<Drug> drugOpt = drugRepo.findById(did);
		if (drugOpt.isPresent()) {
			return drugOpt.get();
		}
		return null;
	}

//	These may or may not work, but I think it might be useful later
	@Override
	public List<Drug> searchByProprietaryName(String brandName) {
		return drugRepo.findByProprietaryName(brandName);
	}
	@Override
	public List<Drug> searchByGenericName(String genericName) {
		return drugRepo.findByGenericName(genericName);
	}

}
