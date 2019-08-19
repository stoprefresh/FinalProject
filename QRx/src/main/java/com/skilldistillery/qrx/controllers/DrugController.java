package com.skilldistillery.qrx.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.qrx.entities.Drug;
import com.skilldistillery.qrx.services.DrugService;

@RestController
@RequestMapping(path = "api/drugs")
@CrossOrigin({ "*", "http://localhost:4205" })
public class DrugController {

	@Autowired
	private DrugService svc;
	
//	@GetMapping() //if this doesn't work, use path with empty quotes
//	public List<Drug> getAllDrugs(){
//		return svc.findAllDrugs();
//	}

	@GetMapping("{did}")
	public Drug getDrugById(@PathVariable int did){
		return svc.show(did);
	}
	
	@GetMapping("name/proprietary/{proprietaryName}")
	public List<Drug> getDrugsByProprietaryName(@PathVariable("proprietaryName") String brand){
		return svc.searchByProprietaryName(brand);
	}
	
	@GetMapping("name/generic/{genericName}")
	public List<Drug> getDrugsByGenericName(@PathVariable("genericName") String generic){
		return svc.searchByGenericName(generic);
	}
}
