import React from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root")); //listo el elemento raiz/root inicializada

const users = [
  {
    id: 1,
    name: "Rayan Rex",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Bryan",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Javi",
    image: "https://robohash.org/user3",
  },
];

root.render(
  <>
    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);
