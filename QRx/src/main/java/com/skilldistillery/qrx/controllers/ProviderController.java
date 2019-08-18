package com.skilldistillery.qrx.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

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

import com.skilldistillery.qrx.entities.Provider;
import com.skilldistillery.qrx.services.ProviderService;
import com.skilldistillery.qrx.services.UserService;

// API Routes Provider - 17AUG19
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LIST	    GET	    /api/providers/	        List Providers
// CREATE	POST	/api/providers/	        Add Provider
// READ	    GET	    /api/providers/{pid}/	Show Provider
// UPDATE	PUT	    /api/providers/{pid}/	Update Provider
// DELETE	DELETE	/api/providers/{pid}/	Delete Provider
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@RestController
@CrossOrigin({ "*", "http://localhost:4205" })
@RequestMapping("api/providers/")
public class ProviderController {

	@Autowired
	private ProviderService providerSvc;
	
	@Autowired
	private UserService userSvc;

	@GetMapping()
	public List<Provider> listAllProviders() {
		return providerSvc.findAllProviders();
	}

	@GetMapping("{pid}")
	public Provider showProviderById(@PathVariable("pid") Integer pid) {
		return providerSvc.findProviderById(pid);
	}
	
	@PostMapping("{uid}")
	public Provider createProvider(@PathVariable("uid") Integer uid, @RequestBody Provider newProvider) {
		newProvider.setUser(userSvc.findUserById(uid));
		Provider managed = providerSvc.addProvider(newProvider);
		return providerSvc.findProviderById(managed.getId());
	}

	@PutMapping("{pid}")
	public Provider updateProvider(@RequestBody Provider updatedProvider, @PathVariable Integer pid,
			HttpServletResponse resp) {
		return providerSvc.updateProvider(pid, updatedProvider);
	}

	@DeleteMapping("{pid}")
	public Boolean deleteProvider(@PathVariable("pid") Integer pid, HttpServletResponse resp) {
		Boolean removed = providerSvc.removeProvider(pid);
		if (removed == null) {
			resp.setStatus(404);
		} else if (removed) {
			resp.setStatus(204);
		} else {
			resp.setStatus(400);
		}
		return removed;
	}
}
