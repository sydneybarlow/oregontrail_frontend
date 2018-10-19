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

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      password: ""
    };
  }

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleSignInSubmit = e => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password
    };
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(r => r.json())
      .then(userData => {
        localStorage.setItem("token", userData.token);
        this.props.updateUserInfo(userData.user);
        this.props.updateUserIdType(userData.user.id);
        this.props.updateFormType("familyForm");
      });
  };

  render() {
    return (
      <React.Fragment>
        <h3>Sign Up</h3>
        <Form onSubmit={this.handleSignInSubmit}>
          <FormGroup>
            <ControlLabel>Name:</ControlLabel>
            <FormControl
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleName}
            />
          </FormGroup>
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

export default SignUpForm;
