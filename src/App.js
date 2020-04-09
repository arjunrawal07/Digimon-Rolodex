import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image.js";
import Name from "./Name.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      digimon: []
    };
  }

  componentDidMount() {
    let URL = "https://digimon-api.herokuapp.com/api/digimon";

    fetch(URL)
      .then(res => res.json())
      .then(convertedRes => {
        this.setState({
          digimon: convertedRes
        });
      });
  }
  loopThruDigimon = items => {
    for (let i = 0; i < items.length; i++) {
      this.setState({
        digimon: items[i]
      });
    }
  };

  previousDigimon = event => {
    this.loopThruDigimon(this.componentDidMount);
  };

  nextDigimon = event => {
    this.loopThruDigimon(this.componentDidMount);
  };

  render() {
    console.log(this.state.digimon);

    let digimon = this.state.digimon;

    let digiImages = digimon.map((image, i) => {
      return <Image key={i} image={image.img} />;
    });

    let digiName = digimon.map((name, i) => {
      return <Name key={i} name={name.name} />;
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>Digimon: Digital Monsters!</h1>
        </header>
        <div className="container">
          <button className="buttonLeft" onClick={this.previousDigimon}>
            Previous
          </button>

          <div className="apiBox">
            <div className="image">{digiImages}</div>
            <div className="text">{digiName}</div>
          </div>
          <button className="buttonRight" onClick={this.nextDigimon}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
