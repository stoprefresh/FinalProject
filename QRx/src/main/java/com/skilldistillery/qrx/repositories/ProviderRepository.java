package com.skilldistillery.qrx.repositories;

import java.util.List;

import com.skilldistillery.qrx.entities.Provider;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProviderRepository extends JpaRepository<Provider, Integer> {

    Provider findByOrganization(String keyword);
    
    List<Provider> findByProviderLike(String keyword);
}
