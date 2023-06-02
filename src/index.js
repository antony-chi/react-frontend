import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root")); //listo el elemento raiz/root inicializada

const Counter = () => {
  const [mensage, setMensaje ] = useState(""); //hook useState es un estado


  return (
    <div>
     <input onChange={(e) => setMensaje(e.target.value)} />
     <button onClick={() =>{
      alert("el mensaje es: "+ mensage)
     }}>
      Save
     </button>
    </div>
  );
};
root.render(
  <>
    <Counter />
  </>
);
