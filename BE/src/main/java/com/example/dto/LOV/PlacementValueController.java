package com.example.dto.LOV;


import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.model.PlacementModel;
import com.example.dto.repository.PlacementRepository;



@RestController
@RequestMapping({"/Placement","/placement"})
public class PlacementValueController {
	
	  private PlacementRepository repository;
	  
	  PlacementValueController(PlacementRepository placementRepository) {
	      this.repository = placementRepository;
	  }
	  
	  @GetMapping(path = {"/placementDetail"})
	  public List<PlacementModel> selectAllAsList() {
	    return repository.findAll(); 
	  }
}
