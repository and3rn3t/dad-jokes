import React, { Component } from "react";
import axios from "axios";
import "./App.css";
// import Joke from "./Joke";

class App extends Component {
  constructor() {
    super();

    this.state = {
      joke: [],
    };
  }

  async componentDidMount() {
    let result = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    this.setState({ joke: result.data });
  }

  render() {
    return (
      <div className="App">
        <h1>Dad Joke</h1>
        {/* <Joke joke={this.state.joke} /> */}
      </div>
    );
  }
}

export default App;
