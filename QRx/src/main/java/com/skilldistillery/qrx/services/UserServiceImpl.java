package com.skilldistillery.qrx.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.entities.Provider;
import com.skilldistillery.qrx.entities.User;
import com.skilldistillery.qrx.repositories.UserRepository;

import org.hibernate.engine.spi.ManagedEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    @Override
    public List<User> findAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public User findUserById(Integer uid) {
        Optional<User> user = userRepo.findById(uid);
        if (user.isPresent()) {
			return user.get();
		}
        return null;
    }

    // @Override
    // public List<Provider> searchProvidersByKeyword(String keyword) {
    //     return userRepo.findByProviderLike(keyword);
    // }

    // @Override
    // public List<Patient> searchPatientsByKeyword(String keyword) {
    //     return userRepo.findByPatientLike(keyword);
    // }

	@Override
	public User addUser(User newUser) {
		return userRepo.saveAndFlush(newUser);
	}

    @Override
    public Boolean removeUser(Integer uid) {
        Boolean isNotActive = false;
        Optional<User> userOpt = userRepo.findById(uid);
        User managedUser = null;
		if(userOpt.isPresent()){
            managedUser = userOpt.get();
            managedUser.setActive(false);
            userRepo.saveAndFlush(managedUser);
            isNotActive = true;
        }
		return isNotActive;
    }

    @Override
    public User updateUser(Integer uid, User updatedUser) {
        Optional<User> userOpt = userRepo.findById(uid);
        User managedUser = null;

        if (userOpt.isPresent()){
            managedUser = userOpt.get();
            managedUser.setPatient(updatedUser.getPatient());
            managedUser.setProvider(updatedUser.getProvider());
            managedUser.setUsername(updatedUser.getUsername());
            managedUser.setPassword(updatedUser.getPassword());
            managedUser.setTitle(updatedUser.getTitle());
            managedUser.setFirstName(updatedUser.getFirstName());
            managedUser.setMiddleName(updatedUser.getMiddleName());
            managedUser.setLastName(updatedUser.getLastName());
            managedUser.setEmail(updatedUser.getEmail());
            managedUser.setPhone(updatedUser.getPhone());
            managedUser.setStreet(updatedUser.getStreet());
            managedUser.setCity(updatedUser.getCity());
            managedUser.setState(updatedUser.getState());
            managedUser.setZip(updatedUser.getZip());

            userRepo.saveAndFlush(managedUser);
        }
        return managedUser;
    }

   
}
