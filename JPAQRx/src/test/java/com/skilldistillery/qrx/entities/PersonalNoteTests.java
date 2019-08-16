package com.skilldistillery.qrx.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PersonalNoteTests {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private PersonalNote note;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("qrxpu");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		note = em.find(PersonalNote.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		note = null;
	}

//	@Test
//	void test() {
//		fail("Not yet implemented");
//	}

	@Test
	void test_note_field_mappings() {
		assertNotNull(note.getTextContent());
		assertEquals("starting to feel a little dizzy and I keep waking up to use the bathroom a lot", note.getTextContent());
	}
}
