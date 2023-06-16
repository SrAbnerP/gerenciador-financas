import React, { useState } from "react";
import Card from "../../components/Card";
import Form from "../../components/Form";
import SelectMenu from "../../components/SelectMenu";
import LancamentosTable from "./lancamentosTable";

import LancamentosService from "../../app/service/lancamentoService";
import LocalStorageService from "../../app/service/localStorageService";

export default function ConsultaLancamento() {
  const [ano, setAno] = useState("");
  const [mes, setMes] = useState("");
  const [tipo, setTipo] = useState("");
  const [lancamentos, setLancamentos] = useState([]);

  const [lancamentoService] = useState(() => new LancamentosService());

  const buscar = () => {
    const usuarioLogado = LocalStorageService.obterItem("_usuario_logado");

    const lancamentoFilro = {
      ano: ano,
      mes: mes,
      tipo: tipo,
      usuario: usuarioLogado.id,
    };

    lancamentoService
      .consultar(lancamentoFilro)
      .then((response) => {
        setLancamentos(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const meses = [
    { label: "Selecione...", value: "" },
    { label: "Janeiro", value: 1 },
    { label: "Fevereiro", value: 2 },
    { label: "Março", value: 3 },
    { label: "Abril", value: 4 },
    { label: "Maio", value: 5 },
    { label: "Junho", value: 6 },
    { label: "Julho", value: 7 },
    { label: "Agosto", value: 8 },
    { label: "Setembro", value: 9 },
    { label: "Outubro", value: 10 },
    { label: "Novembro", value: 11 },
    { label: "Dezembro", value: 12 },
  ];

  const tipos = [
    { label: "Selecione...", value: "" },
    { label: "Despesa", value: "DESPESA" },
    { label: "Receita", value: "RECEITA" },
  ];

  return (
    <Card title="Consulta Lançamentos">
      <div className="row">
        <div className="col-md-6">
          <div className="bs-component">
            <Form htmlFor="inputAno" label="Ano: ">
              <input
                type="text"
                className="form-control"
                id="inputAno"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
                placeholder="Digite o ano"
              />
            </Form>

            <Form htmlFor="inputMes" label="Mês: ">
              <SelectMenu
                id="inputMes"
                value={mes}
                onChange={(e) => setMes(e.target.value)}
                className="form-control"
                lista={meses}
              ></SelectMenu>
            </Form>

            <Form htmlFor="inputTipo" label="Tipo de Lançamento: ">
              <SelectMenu
                id="inputTipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="form-control"
                lista={tipos}
              ></SelectMenu>
            </Form>

            <button onClick={buscar} type="button" className="btn btn-success">
              Buscar
            </button>
            <button type="button" className="btn btn-danger">
              Cadastrar
            </button>
          </div>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-md-12">
          <div className="bs-component">
            <LancamentosTable lancamentos={lancamentos}></LancamentosTable>
          </div>
        </div>
      </div>
    </Card>
  );
}
