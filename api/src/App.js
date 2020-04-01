import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Digimon: Digital Monsters!</h1>
      </header>
      <div className="container">
        <div className="buttonLeft">Backward</div>
        <div className="apiBox">
          <div className="image">image goes here</div>
          <div className="text">text goes here</div>
        </div>
        <div className="buttonRight">Forward</div>
      </div>
    </div>
  );
}

export default App;
