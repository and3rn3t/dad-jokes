import { Component } from "react";
import "./App.css";

class Joke extends Component {
  constructor(props) {
    super();
  }

  render() {
    return this.props.joke;
  }
}

export default Joke;
