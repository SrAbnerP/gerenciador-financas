import React, { useState } from "react";

export default function Home(props) {
  const [saldo, setSaldo] = useState(0);

  return (
    <div class="jumbotron">
      <h1 class="display-3">Bem vindo!</h1>
      <p class="lead">Esse é seu sistema de finanças.</p>
      <p class="lead">Seu saldo para o mês atual é de R$ {saldo}</p>
      <hr class="my-4" />
      <p>
        E essa é sua área administrativa, utilize um dos menus ou botões abaixo
        para navegar pelo sistema.
      </p>
      <p class="lead">
        <a
          class="btn btn-primary btn-lg"
          href="#/cadastro-usuarios"
          role="button"
        >
          <i class="fa fa-users"></i> Cadastrar Usuário
        </a>
        <a
          class="btn btn-danger btn-lg"
          href="https://bootswatch.com/flatly/#"
          role="button"
        >
          <i class="fa fa-users"></i> Cadastrar Lançamento
        </a>
      </p>
    </div>
  );
}
