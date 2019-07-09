package com.example.dto.LOV;

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

import com.example.dto.model.ReligionModel;
import com.example.dto.service.ReligionService;

@CrossOrigin
@RestController
@RequestMapping("/religion")
public class ReligionValueController {
	@Autowired
	private ReligionService service;
	
	// SQL SELECT Controller
	@GetMapping
	public List<ReligionModel> selectAll(){
		return service.selectAll();
	}
	@GetMapping(path={"/{id}"})
	public ResponseEntity<ReligionModel> selectById(@PathVariable("id") Long id){
		return service.selectById(id);
	}
	/*
	// SQL INSERT Controller
	@PostMapping(path={"/insert"})
	public ReligionValueModel insert(@RequestBody ReligionValueModel ReligionValue) {
		return service.insert(ReligionValue);
	}
	
	// SQL UPDATE Controller
	@PutMapping(path={"/update/{id}"})
	public ResponseEntity<ReligionValueModel> update(@PathVariable("id") Long id, @RequestBody ReligionValueModel ReligionValue){
		return service.update(id, ReligionValue);
	}
	
	// SQL DELETE Controller
	@DeleteMapping(path={"/delete/{id}"})
	public ResponseEntity<?> delete(@PathVariable("id") Long id){
		return service.delete(id);
	}
	*/
}
