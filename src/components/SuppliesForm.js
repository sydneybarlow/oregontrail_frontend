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
  Col,
  Image
} from "react-bootstrap";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

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
    let data = {
      supply: [
        {
          name: "food",
          amount: e.target.children[0].children[3].value,
          user_id: this.props.userId
        },
        {
          name: "bullets",
          amount: e.target.children[1].children[3].value,
          user_id: this.props.userId
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
        // console.log(userData);
        this.props.updateSupplies(userData);
        this.props.props.history.push("/homepage");
      });
  };

  render() {
    // console.log("sign up PROPS &&&", this.props);
    // console.log("sign up USERID", this.props.userId);
    return (
      <React.Fragment>
        <Image alt="oregon trail logo" src={`${filePath}OregonTrailLogo.png`} />
        <h3>Purchase Supplies!</h3>
        <h2>You have: ${this.state.money}</h2>
        <Grid>
          <Row>
            <Col lg={4} lgPush={4}>
              <Form onSubmit={this.handleSuppliesSubmit}>
                <FormGroup>
                  <h5>
                    🍞 Recommended 200 pounds of food for each family member.
                  </h5>
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
                  <h5>🔫 Each box of ammunition has 20 bullets inside.</h5>
                  <h4>$25 per box of ammunition</h4>
                  <ControlLabel>Boxes Of Ammunition:</ControlLabel>
                  <FormControl
                    type="text"
                    name="amount"
                    value={this.state.amount}
                    onChange={this.handleAmount}
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

export default SuppliesForm;
