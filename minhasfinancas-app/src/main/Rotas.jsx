import React, { useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "../views/usuarios/login";
import CadastroUsuario from "../views/usuarios/cadastro-usuario";
import Home from "../views/home";
import ConsultaLancamento from "../views/lancamentos/consulta-lancamentos";
import CadastroLancamentos from "../views/lancamentos/cadastro-lancamentos";

import AuthService from "../app/service/authService";

export default function Rotas(props) {
  const PrivateRoute = ({ path, element }) => {
    if (AuthService.isUsuarioAutenticado()) {
      return element;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route
            path="/consulta-lancamentos"
            element={<PrivateRoute element={<ConsultaLancamento />} />}
          />
          <Route
            path="/cadastro-lancamentos/:id?"
            element={<PrivateRoute element={<CadastroLancamentos />} />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}
