import React from "react";
import ReactDOM from "react-dom/client"
//---- iniciar elemento ROOT----
//const rootElement = document.getElementById('root');//obtenemos el elemento root del html
//ReactDOM.createRoot(rootElement)//ReacDOM se la pasamos en la funcion createRoot

const root = ReactDOM.createRoot(document.getElementById('root')); //listo el elemento raiz/root inicializada

function Greeting(){
    return <h1>Este es un componente</h1>
}

root.render(Greeting())