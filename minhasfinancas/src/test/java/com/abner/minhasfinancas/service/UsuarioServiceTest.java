package com.abner.minhasfinancas.service;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import com.abner.minhasfinancas.model.entity.Usuario;
import com.abner.minhasfinancas.model.repository.UsuarioRepository;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
@ActiveProfiles("test")
public class UsuarioServiceTest {

	@Autowired
	UsuarioService service;

	@Autowired
	UsuarioRepository repository;

	@Test
	public void deveValidarEmail() {
		// cenario
		repository.deleteAll();

		// ação
		service.validarEmail("email@email.com");
	}

	public void deveLancarErroAoValidarEmailQuandoExistirEmailCadastrado() {
		// cenario
		Usuario usuario = new Usuario("usuario", "email@email.com");
		repository.save(usuario);

		// ação
		service.validarEmail("email@email.com");
	}

}
