import React, { Component } from "react";
import { Fragment, Card, Grid, Col, Row, Image } from "react-bootstrap";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

class Supply extends Component {
  render() {
    // console.log("fm", this.props);
    return (
      <React.Fragment>
        <Grid>
          <Row>
            <Col lg={2}>
              <Image
                alt="supply image"
                src={`${filePath}${this.props.fm.name}.png`}
                responsive
              />
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <h3>{this.props.fm.name}</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <h4>{this.props.fm.amount}</h4>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Supply;
