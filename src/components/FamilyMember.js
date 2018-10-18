import React, { Component } from "react";
import { Fragment, Card, Grid, Col, Row } from "react-bootstrap";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

class FamilyMember extends Component {
  render() {
    return (
      <React.Fragment>
        <div />
        <Grid>
          <Row>
            <Col lg={2}>
              <img
                alt="family photo"
                src={`${filePath}${this.props.fm.role}.png`}
              />
            </Col>
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
