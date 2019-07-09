package com.example.dto.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "parameter")
public class ParameterModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="TB_PARAMETER")
	private String tbParameter;
	@Column(name ="T_KELUARGA")
	private Double familyAllowance;
	@Column(name ="T_TRANSPORT")
	private Double transportAllowance;
	@Column(name ="P_BPJS")
	private Double BPJS;
	@Column(name ="LEMBUR")
	private Double overtime;
	@Column(name ="BONUS_PG")
	private Double bonusPg;
	@Column(name ="BONUS_TS")
	private Double bonusTs;
	@Column(name ="BONUS_TW")
	private Double bonusTw;
	@Column(name ="BATASAN_BONUS_PG")
	private int limitBonusPg;
	@Column(name ="BATASAN_BONUS_TS")
	private int limitBonusTs;
	@Column(name ="BATASAN_BONUS_TW")
	private int limitBonusTw;
	@Column(name ="MAX_BONUS")
	private Double maxBonus;

	public Double getFamilyAllowance() {
		return familyAllowance;
	}
	public void setFamilyAllowance(Double familyAllowance) {
		this.familyAllowance = familyAllowance;
	}
	public Double getTransportAllowance() {
		return transportAllowance;
	}
	public void setTransportAllowance(Double transportAllowance) {
		this.transportAllowance = transportAllowance;
	}
	public Double getBonusPg() {
		return bonusPg;
	}
	public void setBonusPg(Double bonusPg) {
		this.bonusPg = bonusPg;
	}
	public int getLimitBonusPg() {
		return limitBonusPg;
	}
	public void setLimitBonusPg(int limitBonusPg) {
		this.limitBonusPg = limitBonusPg;
	}
	public Double getBonusTs() {
		return bonusTs;
	}
	public void setBonusTs(Double bonusTs) {
		this.bonusTs = bonusTs;
	}

	public int getLimitBonusTs() {
		return limitBonusTs;
	}
	public void setLimitBonusTs(int limitBonusTs) {
		this.limitBonusTs = limitBonusTs;
	}
	public Double getBonusTw() {
		return bonusTw;
	}
	public void setBonusTw(Double bonusTw) {
		this.bonusTw = bonusTw;
	}
	public int getLimitBonusTw() {
		return limitBonusTw;
	}
	public void setLimitBonusTw(int limitBonusTw) {
		this.limitBonusTw = limitBonusTw;
	}
	public Double getOvertime() {
		return overtime;
	}
	public void setOvertime(Double overtime) {
		this.overtime = overtime;
	}
	public Double getBPJS() {
		return BPJS;
	}
	public void setBPJS(Double BPJS) {
		this.BPJS = BPJS;
	}
	
	
}
