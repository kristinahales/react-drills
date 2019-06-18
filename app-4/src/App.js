import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.display = this.display.bind(this);
  }

  updateUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  updatePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  display() {
      alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  render() {
    return (
      <div className="App">
          <input placeholder='Username:' onChange={this.updateUsername}/>
          <input placeholder='Password:' onChange={this.updatePassword}/>
          <button onClick={this.display}>Click Me!</button>
      </div>
    );
  }
}

export default App;
