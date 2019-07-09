package com.example.dto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.model.SalaryModel;
import com.example.dto.service.SalaryService;

@CrossOrigin
@RestController
@RequestMapping("/salary")
public class SalaryController {
	@Autowired
	private SalaryService service;
	
	// SQL SELECT Controller
	@GetMapping
	public List<SalaryModel> selectAll(){
		return service.selectAll();
	}
	@GetMapping(path={"/{id}"})
	public ResponseEntity<SalaryModel> selectById(@PathVariable("id") Long id){
		return service.selectById(id);
	}
	
	// SQL INSERT Controller
	@PostMapping(path={"/insert"})
	public SalaryModel insert(@RequestBody SalaryModel Salary) {
		return service.insert(Salary);
	}
	
	// SQL UPDATE Controller
	@PutMapping(path={"/update/{id}"})
	public ResponseEntity<SalaryModel> update(@PathVariable("id") Long id, @RequestBody SalaryModel Salary){
		return service.update(id, Salary);
	}
	
	// SQL DELETE Controller
	@DeleteMapping(path={"/delete/{id}"})
	public ResponseEntity<?> delete(@PathVariable("id") Long id){
		return service.delete(id);
	}
}