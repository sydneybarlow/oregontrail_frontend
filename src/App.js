import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import FormContainer from "./components/FormContainer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <FormContainer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
