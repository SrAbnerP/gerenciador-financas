package com.abner.minhasfinancas.api.dto;

import java.math.BigDecimal;

public class LancamentoDTO {

	private Long id;

	private String descricao;

	private Integer mes;

	private Integer ano;

	private Long usuario;

	private BigDecimal valor;

	private String tipo;

	private String status;

	// Constructors
	public LancamentoDTO(String descricao, Integer mes, Integer ano, Long usuario, BigDecimal valor, String tipo,
			String status) {
		super();
		this.descricao = descricao;
		this.mes = mes;
		this.ano = ano;
		this.usuario = usuario;
		this.valor = valor;
		this.tipo = tipo;
		this.status = status;
	}

	public LancamentoDTO(Long id, String descricao, Integer mes, Integer ano, Long usuario, BigDecimal valor,
			String tipo, String status) {
		super();
		this.id = id;
		this.descricao = descricao;
		this.mes = mes;
		this.ano = ano;
		this.usuario = usuario;
		this.valor = valor;
		this.tipo = tipo;
		this.status = status;
	}

	public LancamentoDTO() {
		super();
	}

	// Getters and Setters
	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Integer getMes() {
		return mes;
	}

	public void setMes(Integer mes) {
		this.mes = mes;
	}

	public Integer getAno() {
		return ano;
	}

	public void setAno(Integer ano) {
		this.ano = ano;
	}

	public BigDecimal getValor() {
		return valor;
	}

	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUsuario() {
		return usuario;
	}

	public void setUsuario(Long usuario) {
		this.usuario = usuario;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
