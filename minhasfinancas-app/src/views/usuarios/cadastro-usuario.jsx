import React, { useState } from "react";

import Card from "../../components/Card";
import Form from "../../components/Form";
import { useNavigate } from "react-router-dom";

import UsuarioService from "../../app/service/usuarioService";
import { mensagemErro, mensagemSucesso } from "../../components/Toastr";
import LancamentoService from "../../app/service/lancamentoService";

export default function CadastroUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const navigate = useNavigate();

  const [usuarioService] = useState(() => new UsuarioService());

  const cadastrar = () => {
    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
      confirmarSenha: confirmarSenha,
    };

    try {
      usuarioService.validar(usuario);
    } catch (erro) {
      const mensagens = erro.mensagens;
      mensagens.forEach((msg) => mensagemErro(msg));
      return false;
    }

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
              <i className="pi pi-save" style={{ fontSize: "1rem" }}></i> Salvar
            </button>
            <button
              onClick={redirectLogin}
              type="button"
              className="btn btn-danger"
            >
              <i className="pi pi-times" style={{ fontSize: "1rem" }}></i>{" "}
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
