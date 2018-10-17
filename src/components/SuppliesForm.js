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
      name: "",
      amount: null,
      money: 1000
    };
  }

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleAmount = e => {
    this.setState({ amount: e.target.value });
  };

  handleSuppliesSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    let data = {
      supply: [
        {
          name: "food",
          amount: e.target.children[0].children[3].value
        },
        {
          name: "bullets",
          amount: e.target.children[1].children[2].value
        }
      ]
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
        localStorage.setItem("token", userData.token);
        // this.props.props.history.push("/homepage");
      });
  };

  render() {
    return (
      <React.Fragment>
        <h3>Purchase Supplies!</h3>
        <h2>${this.state.money}</h2>
        <Form onSubmit={this.handleSuppliesSubmit}>
          <FormGroup>
            <h4>👨‍👩‍👧‍👦 Recommended 500 pounds of food for each family member.</h4>
            <h4>$20 per pound of food</h4>
            <ControlLabel>Pounds Of Food:</ControlLabel>
            <FormControl
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleName}
            />
          </FormGroup>
          <FormGroup>
            <h4>$10 per box of ammunition</h4>
            <ControlLabel>Boxes Of Ammunition:</ControlLabel>
            <FormControl
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleAmount}
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
