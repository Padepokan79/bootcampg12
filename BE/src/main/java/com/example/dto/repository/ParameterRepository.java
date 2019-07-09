package com.example.dto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dto.model.ParameterModel;

public interface ParameterRepository extends JpaRepository<ParameterModel, Long>{

}
