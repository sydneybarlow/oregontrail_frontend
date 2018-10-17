import React, { Component } from "react";
import { Fragment, Card, Grid, Col, Row } from "react-bootstrap";
import "../App.css";

class FamilyMember extends Component {
  render() {
    console.log("fm", this.props);
    return (
      <React.Fragment>
        <h4>{this.props.fm.name}</h4>
      </React.Fragment>
    );
  }
}

export default FamilyMember;
