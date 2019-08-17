package com.skilldistillery.qrx.repositories;

import java.util.List;

import com.skilldistillery.qrx.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUsername(String username);

    // TODO --> Move to Patient
    // List<Patient> findByPatientLike(String keyword);
}