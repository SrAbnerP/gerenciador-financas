package com.abner.minhasfinancas.api.controller;

import java.math.BigDecimal;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abner.minhasfinancas.api.dto.TokenDTO;
import com.abner.minhasfinancas.api.dto.UsuarioDTO;
import com.abner.minhasfinancas.exception.ErroAutenticacao;
import com.abner.minhasfinancas.exception.RegraNegocioException;
import com.abner.minhasfinancas.model.entity.Usuario;
import com.abner.minhasfinancas.service.JwtService;
import com.abner.minhasfinancas.service.LancamentoService;
import com.abner.minhasfinancas.service.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

	@Autowired
	private UsuarioService service;

	@Autowired
	private LancamentoService lancamentoService;

	@Autowired
	private JwtService jwtService;

	@PostMapping("/autenticar")
	public ResponseEntity<?> autenticar(@RequestBody UsuarioDTO dto) {
		try {
			Usuario usuarioAutenticado = service.autenticar(dto.getEmail(), dto.getSenha());
			String token = jwtService.gerarToken(usuarioAutenticado);
			TokenDTO tokenDTO = new TokenDTO(usuarioAutenticado.getNome(), token);

			return ResponseEntity.ok(tokenDTO);
		} catch (ErroAutenticacao e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@PostMapping
	public ResponseEntity salvar(@RequestBody UsuarioDTO dto) {
		Usuario usuario = new Usuario(dto.getNome(), dto.getEmail(), dto.getSenha());

		try {
			Usuario usuarioSalvo = service.salvarUsuario(usuario);
			return new ResponseEntity<>(usuarioSalvo, HttpStatus.CREATED);
		} catch (RegraNegocioException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@GetMapping("{id}/saldo")
	public ResponseEntity obterSaldo(@PathVariable("id") Long id) {

		Optional<Usuario> usuario = service.obterPorId(id);

		if (!usuario.isPresent()) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}

		BigDecimal saldo = lancamentoService.obterSaldoPorUsuario(id);

		return ResponseEntity.ok(saldo);

	}
}
