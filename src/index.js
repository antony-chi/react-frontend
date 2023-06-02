import React from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Post";
//---- iniciar elemento ROOT----
//const rootElement = document.getElementById('root');//obtenemos el elemento root del html
//ReactDOM.createRoot(rootElement)//ReacDOM se la pasamos en la funcion createRoot

const root = ReactDOM.createRoot(document.getElementById("root")); //listo el elemento raiz/root inicializada

root.render(
  <>
    <Posts/>
  </>
);
