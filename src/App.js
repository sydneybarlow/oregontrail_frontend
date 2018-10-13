import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import logo from "./logo.svg";
import LogIn from "./components/LogIn";
import Homepage from "./components/Homepage";
import SignUpForm from "./components/SignUpForm";

class App extends Component {
  state = {
    userInfo: null
  };

  updateUserInfo = userInfo => this.setState({ userInfo });

  componentDidMount() {
    const url = "http://localhost:3000/homepage";
    const token = localStorage.getItem("token");
    if (token) {
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(r => r.json())
        .then(response => {
          console.log(response);
        });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Switch>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/homepage" component={Homepage} />} />
            <Route exact path="/signup" component={SignUpForm} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
