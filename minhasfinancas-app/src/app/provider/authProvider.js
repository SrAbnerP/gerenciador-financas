import React, { useState } from "react";
import AuthContext from "../context/authContext";
import AuthService from "../service/authService";

const AuthProvider = ({ children }) => {
  const [isAutenticado, setIsAutenticado] = useState(
    AuthService.isUsuarioAutenticado()
  );

  const login = (usuario) => {
    AuthService.logar(usuario);
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
