import React, { Component } from "react";
import { Fragment, Card, Grid, Col, Row, Image } from "react-bootstrap";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

class Days extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid>
          <Row>
            <Col lg={3}>
              <Image alt="supply name" src={`${filePath}days.png`} />
            </Col>
            <Col>
              <Image alt="bag of money" src={`${filePath}money.png`} />
            </Col>
          </Row>
          <Row>
            {this.props.supplies.map(supply => (
              <Col lg={3}>
                <h3>{supply.name}</h3>
              </Col>
            ))}
            <Col>
              <h3>money</h3>
            </Col>
          </Row>
          <Row>
            {this.props.supplies.map(
              supply =>
                supply.name === "food" ? (
                  <Col lg={3}>
                    <h4>{supply.amount} lbs</h4>
                  </Col>
                ) : (
                  <Col lg={3}>
                    <h4>{supply.amount} boxes</h4>
                  </Col>
                )
            )}
            <Col>
              <h4>${this.props.money}</h4>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Days;
