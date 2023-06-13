import React from "react";
import Login from "./views/login";

import "bootswatch/dist/flatly/bootstrap.css";
import "./styles/custom.css";
import CadastroUsuario from "./views/cadastro-usuario";

function App() {
  return (
    <div>
      {/* <Login></Login> */}
      <CadastroUsuario></CadastroUsuario>
    </div>
  );
}

export default App;
