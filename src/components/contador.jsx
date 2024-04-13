import React from "react";
import { useState } from "react";
import "../style/style.contador.css";

export default function Contador() {
  const [contador, setContador] = useState(0);

  function suma() {
    setContador(contador + 1);
  }
  function reinicio() {
    setContador(0);
  }

  function resta() {
    if (contador === 0) {
      setContador(0);
    } else {
      setContador(contador - 1);
    }
  }

  return (
    <div className="containerContador">
      <h1>CONTADOR: {contador}</h1>

      <div className="buttonsContador">
        <button className="btn-Contador" onClick={resta}>
          -
        </button>
        <button className="btn-Contador" onClick={reinicio}>
          Reiniciar
        </button>
        <button className="btn-Contador" onClick={suma}>
          +
        </button>
      </div>
    </div>
  );
}
