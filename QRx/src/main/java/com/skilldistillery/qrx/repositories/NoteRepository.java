package com.skilldistillery.qrx.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.qrx.entities.PersonalNote;

public interface NoteRepository extends JpaRepository<PersonalNote, Integer> {
	
	List<PersonalNote> findAllByPatient_Id(Integer pid);

	PersonalNote findByIdAndPatient_Id(Integer pid, Integer nid);

}
