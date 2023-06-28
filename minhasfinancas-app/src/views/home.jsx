import { useContext, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import LocalStorageService from "../app/service/localStorageService";
import UsuarioService from "../app/service/usuarioService";
import AuthContext from "../app/context/authContext";

import dinheiro from "../images/dinheiro.jpg";
import disciplina from "../images/disciplina.jpg";

import "../styles/home.css";

export default function LandingPage() {
  const { isAutenticado } = useContext(AuthContext);

  const [usuarioService] = useState(() => new UsuarioService());

  const [saldo, setSaldo] = useState(0);
  const [nome, setNome] = useState("");
  const carouselItems = usuarioService.obterListaImagens();

  useEffect(() => {
    const usuarioLogado = LocalStorageService.obterItem("_usuario_logado");
    if (usuarioLogado && isAutenticado) {
      setNome(usuarioLogado.nome);

      usuarioService
        .obterSaldoPorUsuario(usuarioLogado.id)
        .then((response) => {
          setSaldo(response.data);
        })
        .catch((error) => {
          console.error(error.response);
        });
    }
  }, []);

  return (
    <div className="container-fluid text-center">
      {isAutenticado ? (
        <Card>
          <Card.Body>
            <Card.Title style={{ fontSize: "30px" }}>
              Bem vindo(a), {nome}
            </Card.Title>
            <Card.Text style={{ fontSize: "16px" }}>
              Esse é seu sistema de finanças.
            </Card.Text>
            <Card.Text style={{ fontSize: "25px" }}>
              Seu saldo atual é de R$ {saldo}
            </Card.Text>
            <hr />
            <Card.Text style={{ fontSize: "20px" }}>
              E essa é sua área administrativa, utilize um dos menus ou botões
              abaixo para navegar pelo sistema.
            </Card.Text>

            <Button href="/cadastro-lancamentos" variant="primary">
              Cadastrar Lançamentos
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Carousel fade className="w-100">
          {carouselItems.map((item) => (
            <Carousel.Item>
              <img
                className="d-block w-100 largura carousel-borda"
                src={item.imagem}
                alt={item.titulo}
              />
              <Carousel.Caption>
                <h3>{item.titulo}</h3>
                <p style={{ fontSize: "24px" }}>{item.descricao}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}

      <br />
      <br />
      <Card>
        <div className="row g-0">
          <div className="col-md-5">
            <Card.Img src={dinheiro} alt="Card image" />
          </div>
          <div className="col-md-7">
            <Card.Body>
              <Card.Title style={{ fontSize: "25px" }}>
                Administre seu dinheiro de forma eficiente!
              </Card.Title>
              <Card.Text style={{ fontSize: "18px" }}>
                Ter controle sobre suas finanças é essencial para alcançar
                estabilidade e realizar seus objetivos. Ao administrar seu
                dinheiro de forma eficiente, você ganha mais segurança,
                tranquilidade e a possibilidade de tomar decisões financeiras
                mais acertadas.
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
      <br />
      <Card>
        <div className="row g-0">
          <div className="col-md-7">
            <Card.Body>
              <Card.Title style={{ fontSize: "25px" }}>
                Disciplina, esforço e foco constante.
              </Card.Title>
              <Card.Text style={{ fontSize: "18px" }}>
                Para alcançar nossos objetivos e realizar nossos sonhos, é
                fundamental cultivar a disciplina, o esforço e o foco constante
                em nossas vidas. Essas três qualidades trabalham em conjunto
                para nos impulsionar em direção ao sucesso e superar os desafios
                que surgem em nosso caminho.
              </Card.Text>
            </Card.Body>
          </div>
          <div className=" col-md-5">
            <Card.Img src={disciplina} alt="Card image" />
          </div>
        </div>
      </Card>
    </div>
  );
}
