import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting} from "./Greeting";
import Product from "./Product"
//---- iniciar elemento ROOT----
//const rootElement = document.getElementById('root');//obtenemos el elemento root del html
//ReactDOM.createRoot(rootElement)//ReacDOM se la pasamos en la funcion createRoot

const root = ReactDOM.createRoot(document.getElementById("root")); //listo el elemento raiz/root inicializada

root.render(
  <>
    <Greeting title="hol mundo" name="Jhon" />
    <Greeting title="hola Reac" name="Ryan" />
    <Greeting title="hola JSX" />
    <Greeting title="hola Javascript"/>
    <Greeting title="hola Anthony" />
  </>
);
