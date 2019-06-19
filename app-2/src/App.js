import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      array: ['animals', 'cats', 'dogs'],
    }
  }


  render() {
    const list = this.state.array.map((item, i) => {
      return <h2 key={i}>{item}</h2>
    })
    return (
      <div className="App">{list}</div>
    );
  }
}

export default App;
