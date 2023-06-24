package com.abner.minhasfinancas.service;

import org.springframework.stereotype.Service;

import com.abner.minhasfinancas.model.entity.Usuario;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;

@Service
public interface JwtService {

	String gerarToken(Usuario usuario);

	Claims obterClaims(String token) throws ExpiredJwtException;

	boolean isTokenValido(String token);

	String obterLoginUsuario(String token);

}
