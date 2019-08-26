package com.skilldistillery.qrx.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.qrx.entities.ApprovedProvider;

public interface ApprovedProviderRepository extends JpaRepository<ApprovedProvider, Integer> {

	List<ApprovedProvider> findProvidersByPatient_Id(int pid);

	List<ApprovedProvider> findPatientsByProvider_Id(int pid);

    
}
