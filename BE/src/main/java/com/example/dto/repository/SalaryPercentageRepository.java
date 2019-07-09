package com.example.dto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dto.model.PlacementModel;
import com.example.dto.model.SalaryPercentageModel;
import com.example.dto.model.TaxParameterModel;

	@Repository
	public interface SalaryPercentageRepository 
	    extends JpaRepository<SalaryPercentageModel, Long> { }
	
