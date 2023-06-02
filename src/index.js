import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";
//---- iniciar elemento ROOT----
//const rootElement = document.getElementById('root');//obtenemos el elemento root del html
//ReactDOM.createRoot(rootElement)//ReacDOM se la pasamos en la funcion createRoot

const root = ReactDOM.createRoot(document.getElementById("root")); //listo el elemento raiz/root inicializada

root.render(
  <>
    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33, 3, 22.2]}
      address={{ street: 1234, city: "New York" }}
      greet={function (){alert("hello")}}
    />

    <UserCard
    name="anthony c"
    amount={1000}
    married={false}
    points= {[100,20]}
    address={{
      street: "av some 124",
      city: "new york"
    }} />
  </>
);
