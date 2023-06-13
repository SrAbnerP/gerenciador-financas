import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Login from "../views/login";
import CadastroUsuario from "../views/cadastro-usuario";

export default function Rotas(props) {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
