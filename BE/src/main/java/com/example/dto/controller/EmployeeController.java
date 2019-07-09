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

import com.example.dto.model.EmployeeModel;
import com.example.dto.service.EmployeeService;

@CrossOrigin
@RestController
@RequestMapping("/employee")
public class EmployeeController {
	@Autowired
	private EmployeeService service;
	
	// SQL SELECT Controller
	@GetMapping
	public List<EmployeeModel> selectAll(){
		return service.selectAll();
	}
	@GetMapping(path={"/{id}"})
	public ResponseEntity<EmployeeModel> selectById(@PathVariable("id") Long id){
		return service.selectById(id);
	}
	
	// SQL INSERT Controller
	@PostMapping(path={"/insert"})
	public EmployeeModel insert(@RequestBody EmployeeModel Employee) {
		return service.insert(Employee);
	}
	
	// SQL UPDATE Controller
	@PutMapping(path={"/update/{id}"})
	public ResponseEntity<EmployeeModel> update(@PathVariable("id") Long id, @RequestBody EmployeeModel Employee){
		return service.update(id, Employee);
	}
	
	// SQL DELETE Controller
	@DeleteMapping(path={"/delete/{id}"})
	public ResponseEntity<?> delete(@PathVariable("id") Long id){
		return service.delete(id);
	}
}