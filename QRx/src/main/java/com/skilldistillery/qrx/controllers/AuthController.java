package com.skilldistillery.qrx.controllers;

import java.security.Principal;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.qrx.entities.User;
import com.skilldistillery.qrx.services.AuthService;

@RestController
@CrossOrigin({ "**", "*" })
public class AuthController {
	
	@Autowired
	private AuthService svc;
	
	@PostMapping(path = "/register")
	public User register(@RequestBody User user, HttpServletResponse res) {

	    if (user == null) {
	        res.setStatus(400);
	    }
	    System.out.println(user.getRole());
	    user = svc.register(user);

	    return user;
	}

	@GetMapping(path = "/authenticate")
	public Principal authenticate(Principal principal) {
	    return principal;
	}
	
	@GetMapping(path = "/ping")
	public String ping() {
		return "pong";
	}

}
