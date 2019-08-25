package com.skilldistillery.qrx.repositories;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.skilldistillery.qrx.entities.Drug;

@Repository
public interface DrugRepository extends JpaRepository<Drug, Integer>{

		public List<Drug> findByProprietaryName(String brandName);
		
		@Query("SELECT drug.id, drug.proprietaryName, drug.genericName, drug.strength, drug.unit FROM Drug drug")
		public ArrayList<String> getStrings();
	
		public List<Drug> findByGenericName(String genericName);
	
		@Query("SELECT DISTINCT drug FROM Drug drug WHERE drug.proprietaryName LIKE %?1% OR drug.propNameSuffix LIKE %?1% AND drug.strength LIKE %?2% OR drug.genericName LIKE %?1% AND drug.strength LIKE %?2%")
		public  List<Drug> findByKeywordAndStrength(String keyword, String strength);
	
		@Query("SELECT DISTINCT drug FROM Drug drug WHERE drug.proprietaryName LIKE %?1% OR drug.genericName LIKE %?1%")
		public  List<Drug> findByKeyword(String keyword);
}
