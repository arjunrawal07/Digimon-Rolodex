import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image.js";
import Name from "./Name.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      digimons: [],
      currentCount: 0,
    };
  }

  componentDidMount() {
    let URL = "https://digimon-api.herokuapp.com/api/digimon";

    fetch(URL)
      .then((res) => res.json())
      .then((convertedRes) => {
        this.setState({
          digimons: convertedRes,
        });
        console.log(this.state.digimons[this.state.currentCount]);
      });
  }

  previousDigimon = () => {
    if (this.state.currentCount > 0) {
      this.setState({
        currentCount: this.state.currentCount - 1,
      });
    } else {
      this.setState({
        currentCount: this.state.digimons.length - 1,
      });
    }
  };

  nextDigimon = () => {
    if (this.state.currentCount < this.state.digimons.length - 1) {
      this.setState({
        currentCount: this.state.currentCount + 1,
      });
    } else {
      this.setState({
        currentCount: 0,
      });
      // } el`se {
      //   this.setState({
      //     currentCount: this.state.digimons.length,
      //   });
    }
  };

  render() {
    if (this.state.digimons.length > 0) {
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
              <div className="image">
                {" "}
                <img
                  src={this.state.digimons[this.state.currentCount].img}
                ></img>
              </div>
              <div className="text">
                <h1>{this.state.digimons[this.state.currentCount].name} </h1>
              </div>
              <div className="subheader">
                {" "}
                Level: {this.state.digimons[this.state.currentCount].level}
              </div>{" "}
              <button className="buttonRight" onClick={this.nextDigimon}>
                Next
              </button>
            </div>
          </div>
        </div>
      );
    }

    return <div className="App"></div>;
  }
}

export default App;
