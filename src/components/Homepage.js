import React, { Component } from "react";
import { Fragment } from "react-bootstrap";
import FamilyMembers from "./FamilyMembers";
import "../App.css";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      familyMembers: [],
      supplies: []
    };
  }

  componentDidMount() {
    const url = "http://localhost:3000/family_members";
    fetch(url)
      .then(r => r.json())
      .then(fmData =>
        this.setState({
          familyMembers: [...this.state.familyMembers, fmData]
        })
      );
  }

  render() {
    return (
      <React.Fragment>
        <h3>Oregon Trail Homepage!</h3>
        <FamilyMembers />
      </React.Fragment>
    );
  }
}

export default Homepage;
