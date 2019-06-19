import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <input placeholder='Type here' onChange={this.handleChange} type='text'/>
      <p>{this.state.input}</p>
      </div>
    );
  }
}

export default App;
