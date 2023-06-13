import React from "react";
import Link from "./Link";

export default function NavBar(props) {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="https://bootswatch.com/" className="navbar-brand">
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
            <Link href="#/home" label="Home" />
            <Link href="#/cadastro-usuarios" label="Usuáios" />
            <Link href="#/" label="Lançamentos" />
            <Link href="#/login" label="Login" />
          </ul>
        </div>
      </div>
    </div>
  );
}
