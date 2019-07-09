package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name="Agama")
public class ReligionModel{
	@Id
	@Column(name="ID_AGAMA")
	private long religionId;
	@Column(name="NAMA_AGAMA")
	private String religionName;

	public void update(ReligionModel newReligionModel){
		this.religionId=newReligionModel.religionId;
		this.religionName=newReligionModel.religionName;
	}
}