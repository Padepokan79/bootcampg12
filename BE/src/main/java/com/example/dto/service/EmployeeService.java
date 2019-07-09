package com.example.dto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.dto.model.EmployeeModel;
import com.example.dto.repository.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository repository;
	
	// SQL SELECT Service
	public List<EmployeeModel> selectAll(){
		return repository.findAll();
	}
	public ResponseEntity<EmployeeModel> selectById(Long id){
		return repository.findById(id)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	// SQL INSERT Service
	public EmployeeModel insert(EmployeeModel Employee) {
		return repository.save(Employee);
	}
	
	// SQL UPDATE Service
	public ResponseEntity<EmployeeModel> update(Long id, EmployeeModel Employee){
		return repository.findById(id)
				.map(record->{
					record.update(Employee);
					EmployeeModel updated = repository.save(record);
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