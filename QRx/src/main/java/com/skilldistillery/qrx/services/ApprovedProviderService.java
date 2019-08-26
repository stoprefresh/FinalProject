package com.skilldistillery.qrx.services;

import java.util.List;

import com.skilldistillery.qrx.entities.ApprovedProvider;

public interface ApprovedProviderService {

	List<ApprovedProvider> findProvidersByPatient_Id(int pid);

	List<ApprovedProvider> findPatientsByProvider_Id(int pid);

	ApprovedProvider create(ApprovedProvider provider);

}
