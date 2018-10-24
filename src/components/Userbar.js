import React, { Component } from "react";
import {
  Fragment,
  PageHeader,
  Button,
  Image,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

class Userbar extends Component {
  render() {
    // console.log("user", this.props);
    return (
      <React.Fragment>
        <Grid>
          <Row>
            <Col lg={4} lgPull={2}>
              <Image
                alt="oregon trail logo"
                src={`${filePath}OregonTrailLogo.png`}
              />
            </Col>
            <Col lg={4} lgPush={4}>
              <PageHeader>
                <h2>User: {this.props.username}</h2>
              </PageHeader>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Userbar;
