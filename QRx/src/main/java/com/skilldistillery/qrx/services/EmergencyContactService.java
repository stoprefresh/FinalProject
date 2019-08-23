package com.skilldistillery.qrx.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.skilldistillery.qrx.entities.EmergencyContact;

@Service
public interface EmergencyContactService {

	public List<EmergencyContact> index(Integer pid);

	public EmergencyContact show(Integer pid, Integer did);

	public EmergencyContact createContact(EmergencyContact contact, Integer pid);

	public EmergencyContact update(Integer pid, Integer did, EmergencyContact contact);

	public Boolean destroy(Integer pid, Integer cid);

	public EmergencyContact findById(Integer id);
}
