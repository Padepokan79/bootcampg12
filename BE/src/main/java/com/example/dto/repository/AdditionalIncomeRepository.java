package com.example.dto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dto.model.AdditionalIncomeModel;


@Repository
public interface AdditionalIncomeRepository
    extends JpaRepository<AdditionalIncomeModel, Long> { }
