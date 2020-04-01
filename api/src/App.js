import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   digimon: []
    // }
  }
  componentDidMount() {
    let URL = "https://digimon-api.herokuapp.com/api/digimon";

    fetch(URL)
      .then(res => res.json())
      .then(convertedRes => {
        console.log(convertedRes);
      });
    // this.setState({
    //   digimon: convertedRes
    // });
  }

  render() {
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
}
export default App;
