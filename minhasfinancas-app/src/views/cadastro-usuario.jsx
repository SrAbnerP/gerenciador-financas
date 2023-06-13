import React, { useState } from "react";

import Card from "../components/Card";
import Form from "../components/Form";

export default function CadastroUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const cadastrar = () => {
    console.log(nome + ", " + email + ", " + senha + ", " + confirmarSenha);
  };

  return (
    <div className="container">
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
              <button type="button" className="btn btn-danger">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
