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

class MedicationTests {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Medication med;

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
		med = em.find(Medication.class, 1);

	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		med = null;
	}

	@Test
	@DisplayName(value = "Medication Mappings Test")
	void test_Drug_mappings() {
		assertEquals("one tablet twice per day",med.getDirections());
		
	}
	@Test
	@DisplayName(value = "Medication has Patient")
	void test_Medication_has_patient() {
		assertEquals("Jane",med.getPatient().getUser().getFirstName());
		
	}
	@Test
	@DisplayName(value = "Medication has Drug")
	void test_Medication_has_Drug() {
		assertEquals("", med.getDrug());
		
	}
	
	@Test
	@DisplayName(value = "Medication has Diagnosis")
	void test_Medication_has_Diagnosis() {
		assertEquals("",med.getDiagnosis());
		
	}

}
