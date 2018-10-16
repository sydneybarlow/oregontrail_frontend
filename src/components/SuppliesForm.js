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

class SuppliesForm extends Component {
  constructor() {
    super();
    this.state = {
      money: null,
      poundsOfFood: null,
      boxesOfAmmo: null
    };
  }

  handlePoundsOfFood = e => {
    this.setState({ poundsOfFood: e.target.value });
  };

  handleBoxesOfAmmo = e => {
    this.setState({ boxesOfAmmo: e.target.value });
  };

  handleSuppliesSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let data = {
      money: null,
      poundsOfFood: null,
      boxesOfAmmo: null
    };
    fetch(`http://localhost:3000/supplies`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(r => r.json())
      .then(userData => {
        console.log(userData);
      });
  };

  render() {
    return (
      <React.Fragment>
        <h3>Purchase Supplies!</h3>
        <Form onSubmit={this.handleSuppliesSubmit}>
          <FormGroup>
            <ControlLabel>Pounds Of Food:</ControlLabel>
            <FormControl
              type="text"
              name="poundsOfFood"
              value={this.state.poundsOfFood}
              onChange={this.handlePoundsOfFood}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Boxes Of Ammunition:</ControlLabel>
            <FormControl
              type="text"
              name="boxesOfAmmo"
              value={this.state.boxesOfFood}
              onChange={this.handleBoxesOfAmmo}
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

export default SuppliesForm;
