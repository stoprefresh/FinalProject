package com.skilldistillery.qrx.services;

import java.util.List;

import com.skilldistillery.qrx.entities.PersonalNote;

public interface NoteService {

	List<PersonalNote> getNotes(Integer pid);

	PersonalNote getByPatient_IdAndNote_Id(Integer pid, Integer nid);

	void delete(Integer nid);

	PersonalNote create(Integer pid, PersonalNote note);

	PersonalNote update(PersonalNote note);

}
