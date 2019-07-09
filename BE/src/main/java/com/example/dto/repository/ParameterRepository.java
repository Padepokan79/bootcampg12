package com.example.dto.repository;
//diedit sama Eka
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.dto.model.ParameterModel;

public interface ParameterRepository extends JpaRepository<ParameterModel, Long>{
	@Query(value="SELECT * FROM parameter ORDER BY TB_PARAMETER DESC", nativeQuery=true)
	List<ParameterModel> getLatest();
}
