package com.skilldistillery.qrx.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.qrx.entities.Provider;
import com.skilldistillery.qrx.repositories.ProviderRepository;

@Service
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
        return providerRepo.findByOrganization(keyword);
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
            providerRepo.saveAndFlush(managedProvider);
            isNotActive = true;
        }
		return isNotActive;
    }

	@Override
	public Provider updateProvider(Integer pid, Provider updatedProvider) {
		Optional<Provider> optProv = providerRepo.findById(pid);
		if (optProv.isPresent()) {
			Provider managedProvider = optProv.get();
			managedProvider.setOrganization(updatedProvider.getOrganization());
			managedProvider.setSubunit(updatedProvider.getSubunit());
			providerRepo.saveAndFlush(managedProvider);
		}
		return providerRepo.findById(pid).get();
	}

	@Override
	public Provider findProviderByUsername(String name) {
		return providerRepo.findByUser_username(name);
	}

}
