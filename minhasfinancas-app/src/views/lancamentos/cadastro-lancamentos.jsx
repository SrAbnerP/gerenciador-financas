import React, { useEffect, useState } from "react";

import Card from "../../components/Card";
import Form from "../../components/Form";
import SelectMenu from "../../components/SelectMenu";
import LancamentoService from "../../app/service/lancamentoService";

import { mensagemErro, mensagemSucesso } from "../../components/Toastr";

import LocalStorageService from "../../app/service/localStorageService";
import { useNavigate, useParams } from "react-router-dom";

export default function CadastroLancamentos() {
  //const { id } = useParams();
  const params = useParams();
  const cod = params.id;

  const [id, setId] = useState(null);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");
  const [tipo, setTipo] = useState("");
  const [status, setStatus] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [atualizando, setAtualizando] = useState(false);

  const navigate = useNavigate();

  const [lancamentoService] = useState(() => new LancamentoService());

  const tipos = lancamentoService.obterListaTipos();
  const meses = lancamentoService.obterListaMeses();

  useEffect(() => {
    if (cod) {
      lancamentoService
        .obterPorId(cod)
        .then((response) => {
          const { data } = response;
          setId(data.id);
          setDescricao(data.descricao);
          setValor(data.valor);
          setAno(data.ano);
          setMes(data.mes);
          setTipo(data.tipo);
          setStatus(data.status);
          setUsuario(data.usuario);
          setAtualizando(true);
        })
        .catch((erro) => {
          mensagemErro(erro.response.data);
        });
    }
  }, [cod]);

  const submit = () => {
    const usuarioLogado = LocalStorageService.obterItem("_usuario_logado");

    const lancamento = {
      descricao: descricao,
      valor: valor,
      mes: mes,
      ano: ano,
      tipo: tipo,
      usuario: usuarioLogado.id,
    };

    try {
      lancamentoService.validar(lancamento);
    } catch (erro) {
      const mensagens = erro.mensagens;
      mensagens.forEach((msg) => mensagemErro(msg));
      return false;
    }

    lancamentoService
      .salvar(lancamento)
      .then((response) => {
        navigate("/consulta-lancamentos");
        mensagemSucesso("Lançamento cadastrado com sucesso!");
      })
      .catch((erro) => {
        mensagemErro(erro.response.data);
      });
  };

  const atualizar = () => {
    const lancamento = {
      descricao: descricao,
      valor: valor,
      mes: mes,
      ano: ano,
      tipo: tipo,
      usuario,
      status,
      id,
    };

    lancamentoService
      .atualizar(lancamento)
      .then((response) => {
        navigate("/consulta-lancamentos");
        mensagemSucesso("Lançamento atualizado com sucesso!");
      })
      .catch((erro) => {
        mensagemErro(erro.response.data);
      });
  };

  return (
    <Card
      title={
        atualizando ? "Atualização de Lançamento" : "Cadastro de Lançamento"
      }
    >
      <div className="row">
        <div className="col-m-12">
          <Form id="inputDescricao" label="Descrição: ">
            <input
              id="inputDescricao"
              type="text"
              className="form-control"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </Form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Form id="inputAno" label="Ano: ">
            <input
              id="inputAno"
              type="text"
              className="form-control"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            />
          </Form>
        </div>
        <div className="col-md-6">
          <Form id="inputMes" label="Mês: ">
            <SelectMenu
              id="inputMeses"
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              lista={meses}
              className="form-control"
            />
          </Form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Form id="inputValor" label="Valor: ">
            <input
              id="inputValor"
              type="text"
              className="form-control"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </Form>
        </div>
        <div className="col-md-4">
          <Form id="inputTipo" label="Tipo: ">
            <SelectMenu
              id="inputTipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              lista={tipos}
              className="form-control"
            />
          </Form>
        </div>
        <div className="col-md-4">
          <Form id="inputStatus" label="Status: ">
            <input
              id="inputStatus"
              type="text"
              className="form-control"
              value={status}
              disabled
            />
          </Form>
        </div>
        <dv className="row">
          <div className="col-md-6">
            {atualizando ? (
              <button className="btn btn-success" onClick={atualizar}>
                Atualizar
              </button>
            ) : (
              <button className="btn btn-success" onClick={submit}>
                Salvar
              </button>
            )}

            <button
              className="btn btn-danger"
              onClick={(e) => navigate("/consulta-lancamentos")}
            >
              Cancelar
            </button>
          </div>
        </dv>
      </div>
    </Card>
  );
}
