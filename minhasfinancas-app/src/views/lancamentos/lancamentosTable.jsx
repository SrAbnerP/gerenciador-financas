import React from "react";

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
            disabled={lancamento.status !== "PENDENTE"}
            title="Efetivar"
            type="button"
            className="btn btn-success"
            onClick={(e) => props.alterarStatus(lancamento, "EFETIVADO")}
          >
            <i className="pi pi-check" style={{ fontSize: "1rem" }}></i>
          </button>
          <button
            disabled={lancamento.status !== "PENDENTE"}
            title="Cancelar"
            type="button"
            className="btn btn-warning"
            onClick={(e) => props.alterarStatus(lancamento, "CANCELADO")}
          >
            <i className="pi pi-times" style={{ fontSize: "1rem" }}></i>
          </button>
          <button
            title="Editar"
            type="button"
            className="btn btn-primary"
            onClick={(e) => {
              props.editarAction(lancamento.id);
            }}
          >
            <i className="pi pi-pencil" style={{ fontSize: "1rem" }}></i>
          </button>
          <button
            title="Excluir"
            type="button"
            className="btn btn-danger"
            onClick={(e) => {
              props.deletarAction(lancamento);
            }}
          >
            <i className="pi pi-trash" style={{ fontSize: "1rem" }}></i>
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
