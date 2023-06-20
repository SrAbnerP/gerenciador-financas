import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import UsuarioService from "../../app/service/usuarioService";
import LocalStorageService from "../../app/service/localStorageService";

import Card from "../../components/Card";
import Form from "../../components/Form";
import { mensagemErro } from "../../components/Toastr";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  //const [mensagemErro, setMensagemErro] = useState(null);

  const [usuarioService] = useState(() => new UsuarioService());

  const navigate = useNavigate();

  const entrar = () => {
    usuarioService
      .autenticar({
        email: email,
        senha: senha,
      })
      .then((response) => {
        LocalStorageService.adicionarItem("_usuario_logado", response.data);
        navigate("/home");
      })
      .catch((erro) => {
        mensagemErro(erro.response.data);
      });
  };

  const redirectCadastar = () => {
    navigate("/cadastro-usuarios");
  };

  return (
    <div className="row">
      <div className="col-md-6" style={{ position: "relative", left: "300px" }}>
        <div className="bs-docs-section">
          <Card title="Login">
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
                      <i
                        className="pi pi-sign-in"
                        style={{ fontSize: "1rem" }}
                      ></i>{" "}
                      Entrar
                    </button>
                    <button
                      onClick={redirectCadastar}
                      className="btn btn-danger"
                    >
                      <i
                        className="pi pi-plus"
                        style={{ fontSize: "1rem" }}
                      ></i>{" "}
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
