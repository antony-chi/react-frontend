import React from "react";
import ReactDOM from "react-dom/client";
//---- iniciar elemento ROOT----
//const rootElement = document.getElementById('root');//obtenemos el elemento root del html
//ReactDOM.createRoot(rootElement)//ReacDOM se la pasamos en la funcion createRoot

const root = ReactDOM.createRoot(document.getElementById("root")); //listo el elemento raiz/root inicializada

function Greeting() {
    const married = false;

  return <h1>{married ? "estoy casado 🤐" : "no estoy casado 😔"}</h1>//operador ternario
}

root.render(
  <div>
    <Greeting />
  </div>
);
