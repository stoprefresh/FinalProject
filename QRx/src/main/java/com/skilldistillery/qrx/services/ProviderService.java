package com.skilldistillery.qrx.services;

import java.util.List;

import com.skilldistillery.qrx.entities.Provider;

public interface ProviderService {

    List<Provider> findAllProviders();

    Provider findProviderById(Integer pid);

    List<Provider> searchProvidersByKeyword(String keyword);

    Provider addProvider(Provider newProvider);

    Boolean removeProvider(Integer pid);

    Provider updateProvider(Integer pid, Provider updatedProvider);

	Provider findProviderByUsername(String name);
}
