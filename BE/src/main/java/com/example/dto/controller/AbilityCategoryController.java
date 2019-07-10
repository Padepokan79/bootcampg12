package com.example.dto.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.model.AbilityCategoryModel;
import com.example.dto.repository.AbilityCategoryRepository;

@RestController
@RequestMapping("abilityCategory")
public class AbilityCategoryController {
	
	private AbilityCategoryRepository abilityCategoryRepository;
	
	public AbilityCategoryController(AbilityCategoryRepository abilityCategoryRepository) {
		this.abilityCategoryRepository = abilityCategoryRepository;
	}
	
	@GetMapping("/readAll")
	public List<AbilityCategoryModel> findAll(){
		return abilityCategoryRepository.findAll();
	}
	
	@GetMapping("/readAll/{idCategory}")
	public ResponseEntity<AbilityCategoryModel> findById(@PathVariable Long idCategory){
		return abilityCategoryRepository.findById(idCategory)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping("/create")
	public AbilityCategoryModel create(@RequestBody AbilityCategoryModel abilityCategoryModel) {
		return abilityCategoryRepository.save(abilityCategoryModel);
	}
	
	@PutMapping("/update/{idCategory}")
	public ResponseEntity<AbilityCategoryModel> update(@PathVariable Long idCategory,
														@RequestBody AbilityCategoryModel abilityCategoryModel){
		return abilityCategoryRepository.findById(idCategory)
				.map(record -> {
		            record.setCategoryName(abilityCategoryModel.getCategoryName());
		            AbilityCategoryModel updated = abilityCategoryRepository.save(record);
		            return ResponseEntity.ok().body(updated);
		        }).orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/delete/{idCategory}")
	public ResponseEntity<?> delete(@PathVariable("idCategory") long idCategory){
		return abilityCategoryRepository.findById(idCategory)
				.map(record ->{
					abilityCategoryRepository.deleteById(idCategory);
					return ResponseEntity.ok().build();
				}).orElse(ResponseEntity.notFound().build());
	}
}
