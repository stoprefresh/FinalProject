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

class BloodTypeTests {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private BloodType blood;

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
		blood = em.find(BloodType.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		blood = null;
	}
	
//	@Test
//	void test() {
//		fail("Not yet implemented");
//	}

	@Test
	void test_bloodtype_field_mappings() {
		assertNotNull(blood.getAbo());
		assertEquals("AB", blood.getAbo());
	}
}
