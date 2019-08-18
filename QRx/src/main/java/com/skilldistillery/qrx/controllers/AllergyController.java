package com.skilldistillery.qrx.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.qrx.entities.Allergy;
import com.skilldistillery.qrx.services.AllergyService;

@RestController
@RequestMapping({"api/patients/", "api/patients"})
@CrossOrigin({ "*", "http://localhost:4205" })
public class AllergyController {

	String name;

	@Autowired
	private AllergyService aSvc;

//	LIST	GET	/api/patients/{pid}/allergy/	List Allergies
	@GetMapping("/{pid}/allergies")
	public List<Allergy> listAllergy(@PathVariable Integer pid) {
		return aSvc.index(pid);
	}

//	READ	GET	/api/patients/{pid}/allergy/{aid}/	Show Allergy
	@GetMapping("/{pid}/allergies/{aid}")
	public Allergy show(@PathVariable Integer pid, @PathVariable Integer aid) {
		Allergy allergy = new Allergy();
		allergy = aSvc.show(aid, pid);
		return allergy;
	}

//	CREATE	POST	/api/patients/{pid}/allergy/	Add Allergy
	@PostMapping("/{pid}/allergies")
	public Allergy createAllergy(@RequestBody Allergy allergy, @PathVariable Integer pid) {
		return aSvc.createAllergy(allergy, pid);
	}

//	UPDATE	PUT	/api/patients/{pid}/allergy/{aid}/	Update Allergy
	@PutMapping("/{pid}/allergies/{aid}")
	public Allergy update(@PathVariable Integer pid, @PathVariable Integer aid, @RequestBody Allergy allergy) {
		return aSvc.update(pid, aid, allergy);
	}

//	DELETE	DELETE	/api/patients/{pid}/allergy/{aid}/	Delete Allergy
	@DeleteMapping("/{pid}/allergies/{aid}")
	public Boolean destroy(@PathVariable Integer pid, @PathVariable Integer aid) {
		return aSvc.destroy(aid, pid);

	}
}
