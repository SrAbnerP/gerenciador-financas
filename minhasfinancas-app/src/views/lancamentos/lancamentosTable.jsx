import React from "react";
import { Currency } from "currency-formatter";

export default function LancamentosTable(props) {
  const formatoMoeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const rows = props.lancamentos.map((lancamento) => {
    return (
      <tr key={lancamento.id}>
        <td>{lancamento.descricao}</td>
        <td>{formatoMoeda.format(lancamento.valor)}</td>
        <td>{lancamento.tipo}</td>
        <td>{lancamento.mes}</td>
        <td>{lancamento.status}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => {
              props.editarAction(lancamento);
            }}
          >
            Editar
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={(e) => {
              props.deletarAction(lancamento);
            }}
          >
            Deletar
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Descrição</th>
          <th scope="col">Valor</th>
          <th scope="col">Tipo</th>
          <th scope="col">Mês</th>
          <th scope="col">Situação</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
