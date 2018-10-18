import React, { Component } from "react";
import { Fragment, Card, Grid, Col, Row } from "react-bootstrap";
import "../App.css";

class FamilyMember extends Component {
  render() {
    // console.log("fm", this.props.fm);
    return (
      <React.Fragment>
        <div />
        <Grid>
          <Row>
            <Col lg={2}>avatar Img HERE!</Col>
          </Row>
          <Row>
            <Col lg={2}>{this.props.fm.name}</Col>
          </Row>
          <Row>
            <Col lg={2}>{this.props.fm.health}</Col>
          </Row>
          <Row>
            <Col lg={2}>{this.props.fm.status}</Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default FamilyMember;
