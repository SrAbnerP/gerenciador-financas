import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Login from "../views/login";
import CadastroUsuario from "../views/cadastro-usuario";
import Home from "../views/home";

export default function Rotas(props) {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
