package com.abner.minhasfinancas.api.dto;

public class AtualizaStatusDTO {

	private String status;

	public AtualizaStatusDTO() {
		super();
	}

	public AtualizaStatusDTO(String status) {
		super();
		this.status = status;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
