import React, { Component } from "react";
import { Fragment, Card, Grid, Col, Row } from "react-bootstrap";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

class Map extends Component {
  render() {
    // console.log("fm", this.props);
    return (
      <React.Fragment>
        <div>
          <img alt="Oregon map" src={`${filePath}trail_map/Trail-1.png`} />
        </div>
      </React.Fragment>
    );
  }
}

export default Map;
