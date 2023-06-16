import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Login from "../views/login";
import CadastroUsuario from "../views/cadastro-usuario";
import Home from "../views/home";
import ConsultaLancamento from "../views/lancamentos/consulta-lancamentos";
import CadastroLancamentos from "../views/lancamentos/cadastro-lancamentos";

export default function Rotas(props) {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/consulta-lancamentos"
            element={<ConsultaLancamento />}
          />
          <Route
            path="/cadastro-lancamentos"
            element={<CadastroLancamentos />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}
