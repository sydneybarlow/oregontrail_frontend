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
                <h4>{supply.name}</h4>
              </Col>
            ))}
            <Col lg={2}>
              <h4>money</h4>
            </Col>
            <Col lg={2}>
              <h4>days</h4>
            </Col>
          </Row>
          <Row>
            {this.props.supplies.map(
              supply =>
                supply.name === "food" ? (
                  <Col lg={2}>
                    <h5>{supply.amount} lbs</h5>
                  </Col>
                ) : (
                  <Col lg={2}>
                    <h5>{supply.amount} boxes</h5>
                  </Col>
                )
            )}
            <Col lg={2}>
              <h5>${this.props.money}</h5>
            </Col>
            <Col lg={2}>
              <h5>{this.props.days}</h5>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Supply;
