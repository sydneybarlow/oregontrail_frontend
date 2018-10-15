import React, { Component } from "react";
import { Fragment, Card, Grid, Col, Row } from "react-bootstrap";
import "../App.css";

class FamilyMembers extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              Name: 1
            </Col>
            <Col xs={6} md={4}>
              Name: 2
            </Col>
            <Col xs={6} md={4}>
              Name: 3
            </Col>
            <Col xs={6} md={4}>
              Name: 4
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              Health: 1
            </Col>
            <Col xs={6} md={4}>
              Health: 2
            </Col>
            <Col xs={6} md={4}>
              Health: 3
            </Col>
            <Col xs={6} md={4}>
              Health: 4
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              Status: 1
            </Col>
            <Col xs={6} md={4}>
              Status: 2
            </Col>
            <Col xs={6} md={4}>
              Status: 3
            </Col>
            <Col xs={6} md={4}>
              Status: 4
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default FamilyMembers;
