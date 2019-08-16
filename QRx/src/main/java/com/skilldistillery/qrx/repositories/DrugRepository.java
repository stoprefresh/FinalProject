package com.skilldistillery.qrx.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.qrx.entities.Drug;

public interface DrugRepository extends JpaRepository<Drug, Integer>{

}
