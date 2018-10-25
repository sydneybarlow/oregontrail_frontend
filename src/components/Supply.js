import React, { Component } from "react";
import { Fragment, Card, Grid, Col, Row, Image } from "react-bootstrap";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

class Supply extends Component {
  render() {
    // console.log("supplies props", this.props.supplies);
    return (
      <React.Fragment>
        <Grid>
          <Row>
            {this.props.supplies.map(supply => (
              <Col lg={2}>
                <Image
                  alt="supply name"
                  src={`${filePath}${supply.name}.png`}
                />
              </Col>
            ))}
            <Col lg={2}>
              <Image alt="bag of money" src={`${filePath}money.png`} />
            </Col>
            <Col lg={2}>
              <Image alt="sun" src={`${filePath}days.png`} />
            </Col>
          </Row>
          <Row>
            {this.props.supplies.map(supply => (
              <Col lg={2}>
                <h3>{supply.name}</h3>
              </Col>
            ))}
            <Col lg={2}>
              <h3>money</h3>
            </Col>
            <Col lg={2}>
              <h3>days</h3>
            </Col>
          </Row>
          <Row>
            {this.props.supplies.map(
              supply =>
                supply.name === "food" ? (
                  <Col lg={2}>
                    <h2>{supply.amount} lbs</h2>
                  </Col>
                ) : (
                  <Col lg={2}>
                    <h2>{supply.amount} bullets</h2>
                  </Col>
                )
            )}
            <Col lg={2}>
              <h2>${this.props.money}</h2>
            </Col>
            <Col lg={2}>
              <h2>{this.props.days}</h2>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Supply;
