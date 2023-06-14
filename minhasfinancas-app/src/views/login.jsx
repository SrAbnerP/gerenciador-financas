import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Card from "../components/Card";
import Form from "../components/Form";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState(null);

  const navigate = useNavigate();

  const entrar = () => {
    axios
      .post("http://localhost:8080/api/usuarios/autenticar", {
        email: email,
        senha: senha,
      })
      .then((response) => {
        navigate("/home");
      })
      .catch((erro) => {
        setMensagemErro(erro.response.data);
      });
  };

  const redirectCadastar = () => {
    navigate("/cadastro-usuarios");
  };

  // redirectCadastar = () => {
  //   this.props.history.push('/cadastro-usuarios')
  // }

  return (
    <div className="row">
      <div className="col-md-6" style={{ position: "relative", left: "300px" }}>
        <div className="bs-docs-section">
          <Card title="Login">
            <div className="row">
              <span>{mensagemErro}</span>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="bs-component">
                  <fieldset>
                    <Form label="Email: " htmlFor="exampleInputEmail1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        id="emapleInputEmail1"
                        placeholder="Digite o Email"
                      />
                    </Form>
                    <Form label="Senha: " htmlFor="">
                      <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className="form-control"
                        id="emapleInputPassword1"
                        placeholder="Password"
                      />
                    </Form>
                    <button className="btn btn-success" onClick={entrar}>
                      Entrar
                    </button>
                    <button
                      onClick={redirectCadastar}
                      className="btn btn-danger"
                    >
                      Cadastrar
                    </button>
                  </fieldset>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
