import React, { useState } from "react";

import Card from "../../components/Card";
import Form from "../../components/Form";
import SelectMenu from "../../components/SelectMenu";
import LancamentoService from "../../app/service/lancamentoService";

export default function CadastroLancamentos() {
  const [lancamentoService] = useState(() => new LancamentoService());

  const tipos = lancamentoService.obterListaTipos();
  const meses = lancamentoService.obterListaMeses();

  return (
    <Card title="Cadastro de Laçamento">
      <div className="row">
        <div className="col-m-12">
          <Form id="inputDescricao" label="Descrição: ">
            <input id="inputDescricao" type="text" className="form-control" />
          </Form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Form id="inputAno" label="Ano: ">
            <input id="inputAno" type="text" className="form-control" />
          </Form>
        </div>
        <div className="col-md-6">
          <Form id="inputMes" label="Mês: ">
            <SelectMenu
              id="inputMeses"
              lista={meses}
              className="form-control"
            />
          </Form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Form id="inputValor" label="Valor: ">
            <input id="inputValor" type="text" className="form-control" />
          </Form>
        </div>
        <div className="col-md-4">
          <Form id="inputTipo" label="Tipo: ">
            <SelectMenu id="inputTipo" lista={tipos} className="form-control" />
          </Form>
        </div>
        <div className="col-md-4">
          <Form id="inputStatus" label="Status: ">
            <input
              id="inputStatus"
              type="text"
              className="form-control"
              disabled
            />
          </Form>
        </div>
        <dv className="row">
          <div className="col-md-6">
            <button className="btn btn-success">Salvar</button>
            <button className="btn btn-danger">Cancelar</button>
          </div>
        </dv>
      </div>
    </Card>
  );
}
