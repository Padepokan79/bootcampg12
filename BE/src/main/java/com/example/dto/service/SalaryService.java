package com.example.dto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.dto.model.SalaryModel;
import com.example.dto.repository.SalaryRepository;

@Service
public class SalaryService {
	@Autowired
	private SalaryRepository repository;
	
	// SQL SELECT Service
	public List<SalaryModel> selectAll(){
		return repository.findAll();
	}
	public ResponseEntity<SalaryModel> selectById(Long id){
		return repository.findById(id)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	// SQL INSERT Service
	public SalaryModel insert(SalaryModel Salary) {
		return repository.save(Salary);
	}
	
	// SQL UPDATE Service
	public ResponseEntity<SalaryModel> update(Long id, SalaryModel Salary){
		return repository.findById(id)
				.map(record->{
					record.update(Salary);
					SalaryModel updated = repository.save(record);
					return ResponseEntity.ok().body(updated);
				}).orElse(ResponseEntity.notFound().build());
	}
	
	// SQL DELETE Service
	public ResponseEntity<?> delete(Long id){
		return repository.findById(id)
				.map(record->{
					repository.deleteById(id);
					return ResponseEntity.ok().build();
				}).orElse(ResponseEntity.notFound().build());
	}
}