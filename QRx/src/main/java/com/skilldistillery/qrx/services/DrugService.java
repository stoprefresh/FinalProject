package com.skilldistillery.qrx.services;

import java.util.ArrayList;
import java.util.List;

import com.skilldistillery.qrx.entities.Drug;


public interface DrugService {
	
	public Drug show(Integer id);
	
    public List<Drug> searchByProprietaryName(String brandName);
    
    public List<Drug> searchByGenericName(String genericName);
    
    public List<Drug> search(String keyword, String strength);

    public List<Drug> search(String keyword);

	public ArrayList<String> getStrings();

}
