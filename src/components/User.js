import React, { Component } from "react";
import {
  Fragment,
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  Alert
} from "react-bootstrap";
import "../App.css";

class User extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleLogInSubmit = e => {
    e.preventDefault();
    let data = {
      username: this.state.username,
      password: this.state.password
    };
    fetch(`http://localhost:3000/users/check`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(userData => console.log(userData));
  };

  render() {
    return (
      <React.Fragment>
        <h3>Log In</h3>
        <Form onSubmit={this.handleLogInSubmit}>
          <FormGroup>
            <ControlLabel>Username:</ControlLabel>
            <FormControl
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password:</ControlLabel>
            <FormControl
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </FormGroup>
          <Button type="submit" bsStyle="primary">
            Enter
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default User;
