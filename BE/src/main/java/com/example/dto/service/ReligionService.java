package com.example.dto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.dto.model.ReligionModel;
import com.example.dto.repository.ReligionRepository;

@Service
public class ReligionService {
	@Autowired
	private ReligionRepository repository;
	
	// SQL SELECT Service
	public List<ReligionModel> selectAll(){
		return repository.findAll();
	}
	public ResponseEntity<ReligionModel> selectById(Long id){
		return repository.findById(id)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	// SQL INSERT Service
	public ReligionModel insert(ReligionModel Religion) {
		return repository.save(Religion);
	}
	
	// SQL UPDATE Service
	public ResponseEntity<ReligionModel> update(Long id, ReligionModel Religion){
		return repository.findById(id)
				.map(record->{
					record.update(Religion);
					ReligionModel updated = repository.save(record);
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
