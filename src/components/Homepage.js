import React, { Component } from "react";
import { Fragment, Grid } from "react-bootstrap";
import FamilyMember from "./FamilyMember";
import Supply from "./Supply";
import "../App.css";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: "",
      username: "",
      family_members: [],
      supplies: []
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      name: this.props.name,
      username: this.props.username,
      family_members: this.props.family_members,
      supplies: this.props.supplies
    });
  }

  render() {
    console.log("state.family_members", this.state.family_members);
    return (
      <React.Fragment>
        <h1>Oregon Trail Homepage!</h1>
        <Grid>
          {this.state.family_members.map(fm => (
            <FamilyMember key={fm.id} fm={fm} />
          ))}
          {this.state.supplies.map(fm => (
            <Supply key={fm.id} fm={fm} />
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export default Homepage;
