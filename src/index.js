import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import {Saludar} from './Saludar'
//---- iniciar elemento ROOT----
//const rootElement = document.getElementById('root');//obtenemos el elemento root del html
//ReactDOM.createRoot(rootElement)//ReacDOM se la pasamos en la funcion createRoot

const root = ReactDOM.createRoot(document.getElementById("root")); //listo el elemento raiz/root inicializada

const handdlerChange = (event) => {
  console.log(event.target.value)
}

root.render(
  <>
    <TaskCard ready= {true}/>
    <Saludar/>
    <Button text="saludar"/>

    <input id="soyidInput" onDoubleClick={()=>{
      console.log("doble Click")
    }}/>

  </>
);
