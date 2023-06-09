package com.abner.minhasfinancas.service;

import com.abner.minhasfinancas.model.entity.Usuario;

public interface UsuarioService {

	Usuario autenticar(String email, String senha);

	Usuario salvarUsuario(Usuario usuario);

	void validareEmail(String email);
}
