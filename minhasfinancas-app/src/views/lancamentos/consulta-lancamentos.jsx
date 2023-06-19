import React, { useState } from "react";
import Card from "../../components/Card";
import Form from "../../components/Form";
import SelectMenu from "../../components/SelectMenu";
import LancamentosTable from "./lancamentosTable";

import LancamentosService from "../../app/service/lancamentoService";
import LocalStorageService from "../../app/service/localStorageService";
import { mensagemErro, mensagemSucesso } from "../../components/Toastr";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function ConsultaLancamento() {
  const [ano, setAno] = useState("");
  const [mes, setMes] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [lancamentos, setLancamentos] = useState([]);

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [lancamentoDeletar, setLancamentoDeletar] = useState({});

  const [lancamentoService] = useState(() => new LancamentosService());

  const navigate = useNavigate();

  const buscar = () => {
    if (!ano) {
      mensagemErro("O preenchimento do campo ano é obrigatório.");
      return false;
    }

    const usuarioLogado = LocalStorageService.obterItem("_usuario_logado");

    const lancamentoFilro = {
      ano: ano,
      mes: mes,
      tipo: tipo,
      descricao: descricao,
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

  const abrirConfirmacao = (lancamento) => {
    setShowConfirmDialog(true);
    setLancamentoDeletar(lancamento);
  };

  const deletar = () => {
    lancamentoService
      .deletar(lancamentoDeletar.id)
      .then((response) => {
        setShowConfirmDialog(false);
        setLancamentos((prevLancamentos) =>
          prevLancamentos.filter((l) => l.id !== lancamentoDeletar.id)
        );
        mensagemSucesso("Lançamento deletado com sucesso!");
      })
      .catch((erro) => {
        mensagemErro("Ocorreu um erro ao tentar deletar um lançamento.");
      });
  };

  const meses = lancamentoService.obterListaMeses();

  const tipos = lancamentoService.obterListaTipos();

  const cancelarDelecao = () => {
    setShowConfirmDialog(false);
    setLancamentoDeletar({});
  };

  const confirmDialogFooter = (
    <div>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        onClick={cancelarDelecao}
        className="p-button-text"
      />
      <Button
        label="Confirmar"
        icon="pi pi-check"
        onClick={deletar}
        autoFocus
      />
    </div>
  );

  const preparaFormularioCadastro = () => {
    navigate("/cadastro-lancamentos");
  };

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

            <Form htmlFor="inputDescricao" label="Descrição: ">
              <input
                type="text"
                className="form-control"
                id="inputDescricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Digite a descrição"
              />
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
            <button
              onClick={preparaFormularioCadastro}
              type="button"
              className="btn btn-danger"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-md-12">
          <div className="bs-component">
            <LancamentosTable
              lancamentos={lancamentos}
              deletarAction={abrirConfirmacao}
            ></LancamentosTable>
          </div>
        </div>
      </div>
      <div>
        <Dialog
          header="Confirmação"
          visible={showConfirmDialog}
          style={{ width: "50vw" }}
          modal={true}
          onHide={() => setShowConfirmDialog(false)}
          footer={confirmDialogFooter}
        >
          <p className="m-0">Confirma a exclusão deste lançamento?</p>
        </Dialog>
      </div>
    </Card>
  );
}
