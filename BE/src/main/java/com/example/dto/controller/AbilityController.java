package com.example.dto.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.DTO.AbilityDTO;
import com.example.dto.model.AbilityCategoryModel;
import com.example.dto.model.AbilityModel;
import com.example.dto.repository.AbilityCategoryRepository;
import com.example.dto.repository.AbilityRepository;

@RestController
@RequestMapping("ability")
public class AbilityController {
	private AbilityRepository abilityRepository;

	private AbilityCategoryRepository abilityCategoryRepository;
	
	public AbilityController(AbilityRepository abilityRepository) {
		this.abilityRepository = abilityRepository;
	}
	

	@Autowired
	ModelMapper modelMapper;
	
	
	@GetMapping("/readAll")
	public List<AbilityDTO> findAll(){
		List<AbilityModel> listAbility= abilityRepository.findAll();
		List<AbilityCategoryModel> listAbilityCategory = abilityCategoryRepository.findAll();
		List<AbilityDTO> listAbilityDTO = new ArrayList<AbilityDTO>();
		listAbility.forEach(data->{
			AbilityDTO abilityDTO = modelMapper.map(data, AbilityDTO.class);
			listAbilityCategory.forEach(abilityCategory->{
				if (abilityCategory.getIdCategory() == data.getIdCategory()) {
					abilityDTO.setCategoryName(abilityCategory.getCategoryName());
					listAbilityDTO.add(abilityDTO);
				}
			});
		});
		
		return listAbilityDTO;
	}
	
	@GetMapping("/readAll/{idAbility}")
	public ResponseEntity<AbilityModel> findById(@PathVariable Long idAbility){
		return abilityRepository.findById(idAbility)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping("/create")
	public AbilityModel create(@RequestBody AbilityModel abilityModel) {
		return abilityRepository.save(abilityModel);
	}
	
	@PutMapping("/update/{idAbility}")
	public ResponseEntity<AbilityModel> update(@PathVariable Long idAbility,
														@RequestBody AbilityModel abilityModel){
		return abilityRepository.findById(idAbility)
				.map(record -> {
		            record.setAbilityName(abilityModel.getAbilityName());
		            AbilityModel updated = abilityRepository.save(record);
		            return ResponseEntity.ok().body(updated);
		        }).orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/delete/{idAbility}")
	public ResponseEntity<?> delete(@PathVariable("idAbility") long idAbility){
		return abilityRepository.findById(idAbility)
				.map(record ->{
					abilityRepository.deleteById(idAbility);
					return ResponseEntity.ok().build();
				}).orElse(ResponseEntity.notFound().build());
	}
	
	
}
