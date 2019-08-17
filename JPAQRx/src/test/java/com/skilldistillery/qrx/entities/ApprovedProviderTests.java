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

class ApprovedProviderTests {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private ApprovedProvider ap;

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
		ap = em.find(ApprovedProvider.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		ap = null;
	}

	@Test
	void test() {
		assertNotNull(ap);
	}

	@Test
	void test_approved_provider_field_mappings() {
		assertNotNull(ap.getPatient().getId());
		assertEquals("1", ap.getPatient().getId());
		assertEquals("",ap.getProvider());
		assertEquals(1, ap.getDateApproved());
	}
	
}
