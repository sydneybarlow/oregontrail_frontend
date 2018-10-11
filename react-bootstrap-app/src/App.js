import React, { Component } from "react";
import logo from "./logo.svg";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Oregon Trail</h1>
        <User users={this.state.users} />
      </div>
    );
  }
}

export default App;
