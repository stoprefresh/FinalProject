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
@RequestMapping(path = "drugs")
@CrossOrigin({ "**", "*", "http://localhost:4205" })
public class DrugController {

	@Autowired
	private DrugService svc;

	@GetMapping("/id/{did}")
	public Drug getDrugById(@PathVariable Integer did) {
		return svc.show(did);
	}

	@GetMapping("/search/{keyword}")
	public List<Drug> getDrugsByProprietaryName(@PathVariable("keyword") String keyword) {
		return svc.search(keyword);
	}
	
	@GetMapping("/search/{keyword}/{strength}")
	public List<Drug> getDrugsByProprietaryName(@PathVariable("keyword") String keyword,
			@PathVariable("strength") String strength) {
		return svc.search(keyword, strength);
	}

}
