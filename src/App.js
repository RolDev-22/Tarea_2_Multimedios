import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import HeaderGeneral from "./components/headerGeneral";
import Semaforo from "./components/semaforo";
import To_Do from "./components/to_do";
import Landing from "./components/landingPage";
import Contador from "./components/contador";

function App() {
  const [content, setContent] = useState("semaforo");

  const handleNavigation = (optionHeader) => {
    setContent(optionHeader);
  };

  let Componente;

  switch (content) {
    case "semaforo":
      Componente = Semaforo;
      break;
    case "to-do":
      Componente = To_Do;
      break;
    case "landing":
      Componente = Landing;
      break;
    case "contador":
      Componente = Contador;
      break;
    default:
      Componente = Semaforo;
  }

  return (
    <div className="App">
      <HeaderGeneral handleNavigation={handleNavigation} />
      <Componente />
    </div>
  );
}

export default App;
