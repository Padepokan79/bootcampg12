package com.example.dto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dto.model.AbilityListModel;


@Repository
public interface AbilityListRepository
    extends JpaRepository<AbilityListModel, Long> { }