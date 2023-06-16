import React, { useState } from "react";

import Card from "../components/Card";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

import UsuarioService from "../app/service/usuarioService";
import { mensagemErro, mensagemSucesso } from "../components/Toastr";

export default function CadastroUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const navigate = useNavigate();

  const [usuarioService] = useState(() => new UsuarioService());

  function validar() {
    const msgs = [];

    if (!nome) {
      msgs.push("O campo Nome é obrigatório.");
    }

    if (!email) {
      msgs.push("O campo Email é obrigatório.");
    } else if (!email.match(/^[a-z0=9.]+@[a-z0-9]+\.[a-z]/)) {
      msgs.push("Informe um Email válido.");
    }

    if (!senha || !confirmarSenha) {
      msgs.push("Digite as senha e a confirme");
    } else if (senha !== confirmarSenha) {
      msgs.push("As senhas não batem.");
    }

    return msgs;
  }

  const cadastrar = () => {
    const msgs = validar();

    if (msgs && msgs.length > 0) {
      msgs.forEach((msg, index) => {
        mensagemErro(msg);
      });
      return false;
    }

    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
    };

    usuarioService
      .salvar(usuario)
      .then((response) => {
        mensagemSucesso(
          "Usuário cadastrado com sucesso! Faça o login para acessar o sistema.",
          navigate("/login")
        );
      })
      .catch((erro) => {
        mensagemErro(erro.response.data);
      });
  };

  const redirectLogin = () => {
    navigate("/login");
  };

  return (
    <Card title="Cadastro de Usuário">
      <div className="row">
        <div className="col-lg-12">
          <div className="bs-component">
            <Form label="Nome: " htmlFor="inputNome">
              <input
                type="text"
                id="inputNome"
                className="form-control"
                name="nome"
                onChange={(e) => setNome(e.target.value)}
              />
            </Form>
            <Form label="Email: " htmlFor="inputEmail">
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form>
            <Form label="Senha: " htmlFor="inputSenha">
              <input
                type="password"
                id="inputSenha"
                className="form-control"
                name="senha"
                onChange={(e) => setSenha(e.target.value)}
              />
            </Form>
            <Form label="Confirmar Senha: " htmlFor="inputConfirmarSenha">
              <input
                type="password"
                id="inputConfirmarSenha"
                className="form-control"
                name="confirmarSenha"
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
            </Form>
            <button
              type="button"
              className="btn btn-success"
              onClick={cadastrar}
            >
              Salvar
            </button>
            <button
              onClick={redirectLogin}
              type="button"
              className="btn btn-danger"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
