const { useNavigate } = require("react-router-dom");

export default function LandingPage() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/home");
  };
  return (
    <div className="container text-center">
      <h2>Bem vinda ao sistema Minhas Finanças</h2>
      Este é seu sistema para controle de finanças pessoais, clique no botão
      abaixo para acessar o sistema:
      <br /> <br />
      <div className="offset-md-4 col-md-4">
        <button
          style={{ width: "100%" }}
          className="btn btn-success"
          onClick={goToHomePage}
        >
          <i className="pi pi-sign-in"></i> Acessar
        </button>
      </div>
    </div>
  );
}
