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
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class ProviderTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Provider provider;
	
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
		provider = em.find(Provider.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		provider = null;
	}

	@Test
	@DisplayName("Provider Mappings Test")
	void test_intital_provider_mappings() {
		assertNotNull(provider);
		assertEquals("Denver Metro Ambulance", provider.getOrganization());
		assertEquals("Unit 23", provider.getSubunit());
	}
	
	@Test
	@DisplayName("Verified User information")
	void test_assigned_user_information() {
		assertEquals("dmaunit23", provider.getUser().getUsername());
		assertEquals("test", provider.getUser().getPassword());
		assertEquals(true, provider.getUser().getActive());
		assertEquals("ems", provider.getUser().getRole());
		assertEquals("2019-08-14 12:27:52.0", provider.getUser().getCreateDate().toString());
	}
}
