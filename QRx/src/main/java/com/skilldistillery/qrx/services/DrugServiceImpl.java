package com.skilldistillery.qrx.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.qrx.entities.Drug;
import com.skilldistillery.qrx.repositories.DrugRepository;

@Service
public class DrugServiceImpl implements DrugService {
	@Autowired
	private DrugRepository drugRepo;

//	These may or may not work, but I think it might be useful later
// <3 they were 
	@Override
	public List<Drug> searchByProprietaryName(String brandName) {
		return drugRepo.findByProprietaryName(brandName);
	}

	@Override
	public List<Drug> searchByGenericName(String genericName) {
		return drugRepo.findByGenericName(genericName);
	}

	@Override
	public List<Drug> search(String keyword, String strength) {
		return drugRepo.findByKeywordAndStrength(keyword, strength);
	}

	@Override
	public List<Drug> search(String keyword) {
		return drugRepo.findByKeyword(keyword);
	}

	@Override
	public Drug show(Integer id) {
		Optional<Drug> drug = drugRepo.findById(id);
		if (drug.isPresent()) {
			return drug.get();
		}
		return null;
	}

	@Override
	public ArrayList<String> getStrings() {
		return drugRepo.getStrings();
	}

}
