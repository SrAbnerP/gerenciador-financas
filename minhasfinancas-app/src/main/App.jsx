import React from "react";
import Rotas from "./Rotas";
import NavBar from "../components/NavBar";

import "toastr/build/toastr.min.js";

import "bootswatch/dist/flatly/bootstrap.css";
import "../styles/custom.css";
import "toastr/build/toastr.css";

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
