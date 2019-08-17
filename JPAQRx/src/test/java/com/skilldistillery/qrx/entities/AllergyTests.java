package com.skilldistillery.qrx.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class AllergyTests {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Allergy allergy;

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
		allergy = em.find(Allergy.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		allergy = null;
	}

	@Test
	void test() {
		assertNotNull(allergy);
	}
	
	@Test
	void test_allergy_field_mappings() {
		assertNotNull(allergy.getAllergen());
		assertEquals("Penicillin", allergy.getAllergen());
		assertEquals("severe hives", allergy.getReaction());
	}
	
	@Test
	void test_allergy_has_patient() {
		assertNotNull(allergy.getPatient());
		assertEquals("Jane",allergy.getPatient().getUser().getFirstName());
		assertEquals("Doe",allergy.getPatient().getUser().getLastName());
	}

}
