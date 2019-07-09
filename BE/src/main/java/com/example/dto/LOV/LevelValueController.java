package com.example.dto.LOV;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.model.LevelModel;
import com.example.dto.repository.LevelRepository;

@RestController
@RequestMapping({"/Level","/level"})
public class LevelValueController {
	private LevelRepository levelRepository;
	
	LevelValueController(LevelRepository levelRepository){
		this.levelRepository = levelRepository;
	}
	
	@GetMapping(path = {"/levelDetail"})
	public List<LevelModel> selectAllAsList(){
		return levelRepository.findAll();
	}
}
