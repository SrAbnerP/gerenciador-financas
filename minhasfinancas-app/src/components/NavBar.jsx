import React, { useContext } from "react";
import Link from "../components/Link";
import AuthContext from "../app/context/authContext";

export default function NavBar(props) {
  const { isAutenticado, logout } = useContext(AuthContext);

  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="/home" className="navbar-brand">
          Minhas Finanças
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            {isAutenticado ? (
              <>
                <Link href="/consulta-lancamentos" label="Lançamentos" />
                <Link href="/cadastro-lancamentos" label="Cadastrar" />
                {/* <Link href="#/cadastro-usuarios" label="Cadastrar" /> */}
                <Link onClick={logout} href="/login" label="Sair" />
              </>
            ) : (
              <>
                <Link href="/cadastro-usuarios" label="Cadastre-se" />
                <Link href="/login" label="Login" />
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
