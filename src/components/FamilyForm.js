import React, { Component } from "react";
import {
  Fragment,
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  Alert,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import "../App.css";

class FamilyForm extends Component {
  constructor() {
    super();
    this.state = {
      user_id: null,
      name: "",
      health: "good",
      status: "alive"
    };
  }

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleSignInSubmit = e => {
    e.preventDefault();
    let data = {
      user_id: this.props.userId,
      name: e.target.children[0].children[1].value,
      health: "good",
      status: "alive"
    };
    fetch(`http://localhost:3000/family_members`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(r => r.json())
      .then(userData => {
        this.props.updateFormType("supplyForm");
      });
  };

  render() {
    return (
      <React.Fragment>
        <h3>Make Your Family</h3>
        <Grid>
          <Row>
            <Col>
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
                <Button type="submit" bsStyle="info">
                  Enter
                </Button>
              </Form>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default FamilyForm;
