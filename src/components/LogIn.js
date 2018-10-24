import React, { Component } from "react";
import {
  Fragment,
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  ButtonGroup,
  Alert,
  Grid,
  Row,
  Col,
  Image
} from "react-bootstrap";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

class LogIn extends Component {
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
    fetch(`http://localhost:3000/users/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(userData => {
        localStorage.setItem("token", userData.token);
        this.props.updateUserInfo(userData.user_info);
        this.props.updateFormType("signUp");
        this.props.props.history.push("/homepage");
      });
  };

  render() {
    // console.log("login ==>", this.props);
    return (
      <React.Fragment>
        <Image alt="oregon trail logo" src={`${filePath}OregonTrailLogo.png`} />
        <h3>Log In</h3>
        <Grid>
          <Row>
            <Col lg={4} lgPush={4}>
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
                <ButtonGroup>
                  <Button type="submit" bsStyle="info">
                    Enter
                  </Button>
                  <Button
                    type="button"
                    bsStyle="primary"
                    onClick={() => this.props.updateFormTypeToSignUp()}
                  >
                    Sign Up
                  </Button>
                </ButtonGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default LogIn;
