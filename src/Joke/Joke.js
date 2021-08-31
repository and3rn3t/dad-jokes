import React, { Component } from "react";

class Joke extends Component {

  render() {
    return <div class="joke">{this.props.joke.joke}</div>;
  }
}

export default Joke;
