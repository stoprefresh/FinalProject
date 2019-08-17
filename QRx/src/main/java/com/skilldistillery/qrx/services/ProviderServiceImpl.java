package com.skilldistillery.qrx.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.qrx.entities.Provider;
import com.skilldistillery.qrx.repositories.ProviderRepository;

import org.springframework.beans.factory.annotation.Autowired;

public class ProviderServiceImpl implements ProviderService {

    @Autowired
    private ProviderRepository providerRepo;

    @Override
    public List<Provider> findAllProviders() {
        return providerRepo.findAll();
    }

    @Override
    public Provider findProviderById(Integer pid) {
        Optional<Provider> provider = providerRepo.findById(pid);
        if (provider.isPresent()){
            return provider.get();
        }
        return null;
    }

    @Override
    public List<Provider> searchProvidersByKeyword(String keyword) {
        return providerRepo.findByProviderLike(keyword);
    }

    @Override
    public Provider addProvider(Provider newProvider) {
        return providerRepo.saveAndFlush(newProvider);
    }

    @Override
    public Boolean removeProvider(Integer pid) {
        Boolean isNotActive = false;
        Optional<Provider> providerOpt = providerRepo.findById(pid);
        Provider managedProvider = null;
		if(providerOpt.isPresent()){
            managedProvider = providerOpt.get();
            managedProvider.setActive(false);
            providerRepo.saveAndFlush(managedProvider);
            isNotActive = true;
        }
		return isNotActive;
    }

	@Override
	public Provider updateProvider(Integer pid, Provider updatedProvider) {
		return null;
	}

}
