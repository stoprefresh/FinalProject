package com.skilldistillery.qrx.services;

import java.util.List;

import com.skilldistillery.qrx.entities.User;

public interface UserService {

	List<User> findAllUsers();

    User findUserById(Integer uid);

    // List<Patient> searchPatientsByKeyword(String keyword);

    User addUser(User newUser);
    
    Boolean removeUser(Integer uid);
	
	User updateUser(Integer uid, User updatedUser);
	
	User findByUsername(String username);
}
