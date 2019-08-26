package com.skilldistillery.qrx.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.qrx.entities.ApprovedProvider;
import com.skilldistillery.qrx.repositories.ApprovedProviderRepository;

@Service
public class ApprovedProviderServiceImpl implements ApprovedProviderService {

    @Autowired
    private ApprovedProviderRepository providerRepo;

	@Override
	public List<ApprovedProvider> findProvidersByPatient_Id(int pid) {
		return providerRepo.findProvidersByPatient_Id(pid);
	}

	@Override
	public List<ApprovedProvider> findPatientsByProvider_Id(int pid) {
		return providerRepo.findPatientsByProvider_Id(pid);
	}

	@Override
	public ApprovedProvider create(ApprovedProvider provider) {
		return providerRepo.saveAndFlush(provider);
	}

}
