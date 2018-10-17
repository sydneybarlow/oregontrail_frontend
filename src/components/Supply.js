import React, { Component } from "react";
import { Fragment, Card, Grid, Col, Row } from "react-bootstrap";
import "../App.css";

class Supply extends Component {
  render() {
    console.log("fm", this.props);
    return (
      <React.Fragment>
        <h4>{this.props.fm.name}</h4>
        <h4>{this.props.fm.amount}</h4>
      </React.Fragment>
    );
  }
}

export default Supply;
