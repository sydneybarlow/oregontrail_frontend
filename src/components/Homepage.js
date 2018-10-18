import React, { Component } from "react";
import {
  Fragment,
  Grid,
  Button,
  ButtonGroup,
  Modal,
  Row,
  Col,
  Table,
  Image
} from "react-bootstrap";
import Userbar from "./Userbar";
import FamilyMember from "./FamilyMember";
import Supply from "./Supply";
import DoneModal from "./DoneModal";
import Map from "./Map";
import WYModal from "./WYModal";
import IDModal from "./IDModal";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      username: this.props.username,
      money: this.props.money,
      miles: this.props.miles,
      family_members: this.props.family_members,
      supplies: this.props.supplies,
      doneShow: false,
      locWYShow: false,
      locIDShow: false,
      intervalId: null
    };
  }

  handleClose() {
    this.setState({ show: false });
    this.props.updateFormType("familyForm");
    console.log("modal", this.props);
  }

  handleDoneShow() {
    this.setState({ doneShow: true });
  }

  handleWYShow() {
    this.setState({ locWYShow: true });
  }

  handleIDShow() {
    this.setState({ locIDShow: true });
  }

  handleGameStart = () => {
    const intervalId = setInterval(this.decrementMiles, 10);
    this.setState({ intervalId: intervalId });
  };

  decrementMiles = () => {
    let newMiles = this.state.miles - 1;
    if (this.state.miles <= 0) {
      clearInterval(this.state.intervalId);
      this.handleDoneShow();
    } else if (this.state.miles === 719) {
      this.setState({
        ...this.state,
        miles: newMiles
      });
      this.state.supplies.map(supply => {
        if (supply.name === "food") {
          const newAmt = supply.amount - 3;
          this.setState({
            ...this.state,
            supplies: [
              {
                ...this.state.supplies,
                amount: newAmt
              }
            ]
          });
        }
      });
      this.setState({ locIDShow: true });
    } else if (this.state.miles === 1150) {
      this.setState({
        ...this.state,
        miles: newMiles
      });
      this.state.supplies.map(supply => {
        if (supply.name === "food") {
          const newAmt = supply.amount - 3;
          this.setState({
            ...this.state,
            supplies: [
              {
                ...this.state.supplies,
                amount: newAmt
              }
            ]
          });
        }
      });
      this.setState({ locWYShow: true });
    } else {
      this.setState({
        ...this.state,
        miles: newMiles
      });
      this.state.supplies.map(supply => {
        if (supply.name === "food") {
          const newAmt = supply.amount - 3;
          this.setState({
            ...this.state,
            supplies: [
              {
                ...this.state.supplies,
                amount: newAmt
              }
            ]
          });
        }
      });
    }
  };

  render() {
    // console.log(this.state);
    return (
      <React.Fragment>
        <Userbar name={this.state.name} username={this.state.username} />
        <Grid>
          <Row className="show-grid">
            <Col lg={12}>
              <h1>
                <img
                  alt="oregon trail logo"
                  src={`${filePath}OregonTrailLogo.png`}
                />
              </h1>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col>
              <FamilyMember family_members={this.state.family_members} />
            </Col>
            <Col lg={1} />
            {this.state.supplies.map(fm => (
              <Col lg={1}>
                <Supply key={fm.id} fm={fm} />
              </Col>
            ))}
            <Col lg={1} />
            <Col lg={4}>The trail images will go here!</Col>
          </Row>
        </Grid>
        <h2>{this.state.miles} miles from Oregon City</h2>
        <Grid>
          <Row>
            <Col lg={10}>
              <Map />
            </Col>
            <Col lg={2} lgPush={1}>
              <ButtonGroup vertical bsSize="large">
                <Button bsStyle="primary" onClick={this.handleGameStart}>
                  Get Goin!
                </Button>
                <Button bsStyle="info">Hunt</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
        <DoneModal
          show={this.state.doneShow}
          handleShow={this.handleDoneShow}
          handleClose={this.handleClose.bind(this)}
        />
        <WYModal
          show={this.state.locWYShow}
          handleShow={this.handleWYShow}
          handleClose={this.handleClose.bind(this)}
        />
        <IDModal
          show={this.state.locIDShow}
          handleShow={this.handleIDShow}
          handleClose={this.handleClose.bind(this)}
        />
      </React.Fragment>
    );
  }
}
export default Homepage;
