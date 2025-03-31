import React from "react";
import "./styles.css"; // Ajuste aqui se o nome do arquivo de estilo for `styles.css`

const Card = ({ name, status }) => {
  return (
    <div className={`card ${status.toLowerCase()}`}>
      <h2>{name}</h2>
      <p>
        {status === "Aprovado"
          ? "Parabéns! Você passou."
          : "Infelizmente, você foi reprovado."}
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <h1>Situação do Aluno</h1>
      <div className="cards">
        <Card name="João" status="Aprovado" />
        <Card name="Maria" status="Reprovado" />
      </div>
    </div>
  );
};

export default App;
