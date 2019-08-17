	package com.skilldistillery.qrx.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class DiagnosisTests {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Diagnosis diagnosis;

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
		diagnosis = em.find(Diagnosis.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		diagnosis = null;
	}

	@Test
	@DisplayName(value = "Diagnosis Mappings Test")
	void test_Diagnosis_mappings() {
		assertNotNull(diagnosis);
		assertEquals(1,diagnosis.getId());
		assertEquals("Diabetes Mellutis Type 2 w/o Complication",diagnosis.getName());
		assertEquals("E11.9",diagnosis.getIcd10());
		assertEquals("2005-07-15",diagnosis.getDateDiagnosed());
	}
	
	@Test
	@DisplayName(value = "Diagnosis Has Patient Test")
	void test_Diagnosis_has_Patient_mappings() {
		assertNotNull(diagnosis.getPatient());
		assertEquals("Jane",diagnosis.getPatient().getUser().getFirstName());
		assertEquals("Doe",diagnosis.getPatient().getUser().getLastName());
	}
	@Test
	@DisplayName(value = "Diagnosis Has Medications Test")
	void test_Diagnosis_has_Medications_mappings() {
		assertTrue(diagnosis.getMedications().size() > 0);
	}

}
