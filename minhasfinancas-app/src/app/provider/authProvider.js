import React, { useState } from "react";
import AuthContext from "../context/authContext";
import AuthService from "../service/authService";
import ApiService from "../service/apiservice";
import jwt from "jsonwebtoken";

const AuthProvider = ({ children }) => {
  const [isAutenticado, setIsAutenticado] = useState(
    AuthService.isUsuarioAutenticado()
  );

  const login = (tokenDTO) => {
    const token = tokenDTO.token;
    const claims = jwt.decode(token);
    ApiService.registrarToken(token);
    AuthService.logar(tokenDTO);
    setIsAutenticado(true);
  };

  const logout = () => {
    AuthService.removerUsuarioAutenticado();
    setIsAutenticado(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAutenticado,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
