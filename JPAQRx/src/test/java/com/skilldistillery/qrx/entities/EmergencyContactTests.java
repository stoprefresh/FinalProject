package com.skilldistillery.qrx.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
	
class EmergencyContactTests {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private EmergencyContact emergencyContact;

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
		emergencyContact = em.find(EmergencyContact.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		emergencyContact = null;
	}

	@Test
	@DisplayName(value = "EmergencyContact Mappings Test")
	void test_EmergencyContact_mappings() {
		assertNotNull(emergencyContact);
		assertEquals(1,emergencyContact.getId());
		assertEquals("joedoe@doe.com",emergencyContact.getEmail());
		assertEquals("Joe",emergencyContact.getFirstName());
		assertEquals("Doe",emergencyContact.getLastName());
		assertEquals("303-555-5555",emergencyContact.getPhone());
		assertEquals("husband",emergencyContact.getRelationship());
		
	}
	
	@Test
	@DisplayName(value = "Emergency Contact has Patient")
	void test_EmergencyContact_has_Patient() {
		assertEquals("Jane",emergencyContact.getPatient().getUser().getFirstName());
	}

}
