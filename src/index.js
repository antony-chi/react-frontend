import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root")); //listo el elemento raiz/root inicializada

const Counter = () => {//crea el componente
  const [mensage, setMensaje ] = useState(""); //hook useState es un estado
  const [counter, setCounter] =useState(0)


  useEffect(() => {
    console.log("render")
  }, [ counter ])//dependencia sin[]siempre se ejecuta, []areeglo vacio se ejecuta 1 ves, [counter]depende del stado counter

  return (
    <div>
     <input onChange={(e) => setMensaje(e.target.value)} />
     <button onClick={() =>{
      alert("el mensaje es: "+ mensage)
     }}>
      Save
     </button>
     
     <hr/>

     <h1>Contador: {counter}</h1>
     <button onClick={() => setCounter(counter+1)}>
      incremetar
     </button>
    </div>
  );
};
root.render(
  <>
    <Counter />
  </>
);
