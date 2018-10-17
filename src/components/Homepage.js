import React, { Component } from "react";
import { Fragment, Grid, Button } from "react-bootstrap";
import FamilyMember from "./FamilyMember";
import Supply from "./Supply";
import "../App.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      username: this.props.username,
      money: this.props.money,
      miles: this.props.miles,
      family_members: this.props.family_members,
      supplies: this.props.supplies
    };
  }

  handleGameStart = () => {
    setInterval(this.decrementMiles, 1000);
  };

  decrementMiles = () => {
    let newMiles = this.state.miles - 20;
    if (this.state.miles > 0) {
      this.setState({
        ...this.state,
        miles: newMiles
      });
    }
  };

  render() {
    console.log("home", this.state);
    return (
      <React.Fragment>
        <h1>Oregon Trail Homepage!</h1>
        <h4>{this.state.miles} miles from Oregon City</h4>
        <Grid>
          {this.state.family_members.map(fm => (
            <FamilyMember key={fm.id} fm={fm} />
          ))}
          {this.state.supplies.map(fm => (
            <Supply key={fm.id} fm={fm} />
          ))}
        </Grid>
        <Button onClick={this.handleGameStart}>Get Goin!</Button>
      </React.Fragment>
    );
  }
}

export default Homepage;
