import React, { useEffect, useState } from "react";
import AuthContext from "../context/authContext";
import AuthService from "../service/authService";
import jwt from "jsonwebtoken";

const AuthProvider = ({ children }) => {
  const [isAutenticado, setIsAutenticado] = useState(
    AuthService.isUsuarioAutenticado()
  );

  const login = (tokenDTO) => {
    const token = tokenDTO.token;
    const claims = jwt.decode(token);
    const usuario = {
      id: claims.userId,
      nome: claims.nome,
    };
    AuthService.logar(usuario, token);
    setIsAutenticado(true);
  };

  useEffect(() => {
    const isUserAuthenticated = AuthService.isUsuarioAutenticado();
    if (isUserAuthenticated) {
      const usuario = AuthService.refreshSession();
      setIsAutenticado(true);
    }
  }, []);

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
