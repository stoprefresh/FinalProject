package com.skilldistillery.qrx.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.skilldistillery.qrx.entities.User;
import com.skilldistillery.qrx.repositories.UserRepository;

@Service
public class AuthServiceImpl implements AuthService {

	@Autowired
	private UserRepository repo;
	
	@Autowired
	private PasswordEncoder encoder;

	@Override
	public User register(User user) {
	String plainText = user.getPassword();
	String encrypted = encoder.encode(plainText);
	user.setPassword(encrypted);
	user.setActive(true);
//	user.setRole("standard");
	repo.saveAndFlush(user);
	return user;
	}

}
