package com.skilldistillery.qrx.entities;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class DrugTests {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Drug drug;

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
		drug = em.find(Drug.class, 1);

	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		drug = null;
	}

	@Test
	@DisplayName(value = "Drug Mappings Test")
	void test_Drug_mappings() {
		assertNotNull(drug);
		
	}

}
