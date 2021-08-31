import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "./Joke/Joke.css";
import Joke from "./Joke/Joke";

class App extends Component {
  constructor() {
    super();

    this.state = {
      joke: {},
    };
    this.componentDidMount = this.componentDidMount.bind(this);
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
      <div>
        <div class="header">
          <h1>Dad Jokes</h1>
        </div>
        <div>
          <Joke joke={this.state.joke} />
        </div>
        <br></br>
        <br></br>
        <button onClick={this.componentDidMount}>New Joke</button>
      </div>
    );
  }
}

export default App;
