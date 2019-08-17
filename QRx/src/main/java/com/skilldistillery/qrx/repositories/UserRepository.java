package com.skilldistillery.qrx.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.qrx.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
