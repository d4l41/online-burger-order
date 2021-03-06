import React from "react";
import logo from "./logo.svg";
import "./style.css";

import { MyCoolButton } from "../MyCoolButton";
import { Comment } from "../Comment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Comment zohiogch="Дорж" />
        <MyCoolButton tovchNer="Minii laitai towch" dar="Namaig dar" />

        <p>Hi react!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
