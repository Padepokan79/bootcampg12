package com.example.dto.LOV;

import java.util.HashMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.repository.PositionRepository;

@CrossOrigin
@RestController
@RequestMapping
public class PositionValueController {
	private PositionRepository repository;

	  PositionValueController(PositionRepository repository) {
	      this.repository = repository;
	  }

	  // CRUD methods here
	  @GetMapping()
	  public HashMap<Long, String> selectAll(){
		  HashMap<Long, String> temp = new HashMap<>();
		  
		 repository.findAll().forEach(posisi->{
			 temp.put(posisi.getIdPosition(), posisi.getPositionName());
		 });
		 return temp;
	  }
}
