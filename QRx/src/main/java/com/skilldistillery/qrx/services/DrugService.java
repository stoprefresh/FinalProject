package com.skilldistillery.qrx.services;

import java.util.List;

import com.skilldistillery.qrx.entities.Drug;


public interface DrugService {
	
	/*
	 *  LIST	GET		/api/drugs/			List Drugs
		READ	GET		/api/drugs/{did}/	Show Drug
		UPDATE	PUT		/api/drugs/{did}/	Update Drug
	 */
	
	public List<Drug> findAllDrugs();

    public Drug show(int did);
    
    public List<Drug> searchByProprietaryName(String brandName);
    
    public List<Drug> searchByGenericName(String genericName);


}
