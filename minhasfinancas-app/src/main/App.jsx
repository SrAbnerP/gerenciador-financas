import React from "react";
import Rotas from "./Rotas";

import "bootswatch/dist/flatly/bootstrap.css";
import "../styles/custom.css";
import NavBar from "../components/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <Rotas></Rotas>
      </div>
    </>
  );
}

export default App;
