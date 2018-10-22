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
import DoneModal from "./Modals/DoneModal";
import Map from "./Map";
import WYModal from "./Modals/WYModal";
import IDModal from "./Modals/IDModal";
import HuntingModal from "./Modals/HuntingModal";
import EventModal from "./Modals/EventModal";
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
      events: this.props.events,
      eventInfo: null,
      doneShow: false,
      locWYShow: false,
      locIDShow: false,
      huntShow: false,
      eventShow: false,
      eventId: null,
      intervalId: null,
      mapId: 1
    };
  }

  handleDoneClose() {
    this.setState({ doneShow: false });
    this.props.updateFormType("familyForm");
  }

  handleDoneShow() {
    this.setState({ doneShow: true });
  }

  handleWYClose() {
    this.setState({ locWYShow: false });
  }

  handleWYShow() {
    this.setState({ locWYShow: true });
  }

  handleIDClose() {
    this.setState({ locIDShow: false });
  }

  handleIDShow() {
    this.setState({ locIDShow: true });
  }

  handleHuntClose = () => {
    this.setState({ huntShow: false });
  };

  handleHuntShow = () => {
    console.log("huntshow!!!");
    this.setState({ huntShow: true });
  };

  handleEventClose() {
    this.setState({
      eventShow: false,
      eventId: null,
      eventInfo: null
    });
    this.handleGameStart();
  }

  // handleEventShow() {
  //   console.log("eventSHOW");
  //   this.setState({ eventShow: true });
  // }

  incrementFood = () => {
    console.log("getting food");
    this.setState(
      {
        ...this.state,
        supplies: this.state.supplies.map(supply => {
          if (supply.name === "food") {
            let newFoodAmount = supply.amount + 4;
            return {
              ...supply,
              amount: newFoodAmount
            };
          } else {
            return supply;
          }
        })
      },
      this.decrementBullets
    );
  };

  decrementBullets = () => {
    console.log("lossing bullets");
    this.setState({
      ...this.state,
      supplies: this.state.supplies.map(supply => {
        if (supply.name === "bullets") {
          let newBulletAmount = supply.amount - 4;
          return {
            ...supply,
            amount: newBulletAmount
          };
        } else {
          return supply;
        }
      })
    });
  };

  allHuntFunctions = () => {
    console.log("HUNTING!!");
    this.incrementFood();
    // this.decrementBullets();
    this.handleHuntShow();
  };

  handleGameStart = () => {
    console.log("game start");
    if (!this.state.intervalId) {
      const intervalId = setInterval(this.cities, 1000);
      this.setState({ intervalId: intervalId });
    }
  };

  cities = () => {
    console.log("cities");
    // this.randomEvent();
    // if (this.state.eventId <= 8) {
    //   this.handleRest();
    //   // this.handleEventShow();
    // }
    if (this.state.miles <= 0) {
      clearInterval(this.state.intervalId);
      this.handleDoneShow();
    } else if (this.state.miles === 720) {
      clearInterval(this.state.intervalId);
      this.decrementMiles();
      this.setState({ locIDShow: true });
    } else if (this.state.miles === 1150) {
      clearInterval(this.state.intervalId);
      this.decrementMiles();
      this.setState({ locWYShow: true });
    } else {
      this.decrementMiles();
    }
  };

  randomEvent = () => {
    return this.state.events.find(x => x.id === this.state.eventId);
  };

  decrementMiles = () => {
    console.log("miles");
    let newMiles = this.state.miles - 5;
    this.setState(
      {
        ...this.state,
        miles: newMiles
      },
      this.decrementFood
    );
  };

  decrementFood = () => {
    console.log("food");
    this.setState(
      {
        ...this.state,
        supplies: this.state.supplies.map(supply => {
          if (supply.name === "food") {
            let newFoodAmount = supply.amount - 4;
            return {
              ...supply,
              amount: newFoodAmount
            };
          } else {
            return supply;
          }
        })
      },
      this.getRandomNumberEvents
    );
  };

  getRandomNumberEvents = () => {
    console.log("random events");
    const eventIdNumber = Math.floor(Math.random() * this.state.events.length);
    // debugger;
    if (eventIdNumber <= 8) {
      this.setState({
        eventId: eventIdNumber,
        eventInfo: this.state.events[eventIdNumber - 1],
        eventShow: true
      });
      this.handleRest();
    }
  };

  // stopTimer = () => {
  //   console.log("timer");
  //   if (this.state.eventId.id <= 8) {
  //     clearInterval(this.state.intervalId);
  //   }
  // };

  handleRest = () => {
    console.log("RESTING!!!!");
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  };

  poorHealth = () => {
    this.setState({
      ...this.state,
      family_members: this.state.family_members.map(family => {
        if (family.health === "good") {
          return {
            ...family,
            health: "fair"
          };
        } else if (family.health === "fair") {
          return {
            ...family,
            health: "poor"
          };
        } else {
          return {
            ...family,
            health: "bad"
          };
        }
      })
    });
  };

  deadFamilyMember = () => {
    this.setState({
      ...this.state,
      family_members: this.state.family_members.map(family => {
        if ((family.status = "alive")) {
          return {
            ...family,
            status: "dead"
          };
        }
      })
    });
  };

  renderMap = () => {
    let newMap = this.state.mapId - 1;
    if (this.state.miles === 1795 / 29) {
      this.setState({
        mapId: newMap
      });
    }
  };

  render() {
    console.log("render", this.state.eventId);
    return (
      <React.Fragment>
        <Userbar name={this.state.name} username={this.state.username} />
        <Grid>
          <Row className="show-grid">
            <Col lg={12}>
              <h1>
                <Image
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
            {this.state.supplies.map(fm => (
              <Col lg={1}>
                <Supply key={fm.id} fm={fm} />
              </Col>
            ))}
            <Col lg={10} lgPush={3}>
              <Image
                alt="oregon ox and plains"
                src={`${filePath}placeholder.png`}
              />
            </Col>
          </Row>
        </Grid>
        <h2>{this.state.miles} miles from Oregon City</h2>
        <Grid>
          <Row>
            <Col lg={10}>
              <div className="map">
                <Map />
              </div>
            </Col>
            <Col lg={2} lgPush={1}>
              <ButtonGroup vertical bsSize="large">
                <Button bsStyle="primary" onClick={this.handleGameStart}>
                  Get Goin!
                </Button>
                <Button bsStyle="info" onClick={this.allHuntFunctions}>
                  Hunt
                </Button>
                <Button bsStyle="success" onClick={this.handleRest}>
                  Rest
                </Button>
                <Button onClick={this.poorHealth}>Bad Health Test</Button>
                <Button onClick={this.deadFamilyMember}>Dead Family</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
        <DoneModal
          show={this.state.doneShow}
          handleShow={this.handleDoneShow}
          handleClose={this.handleDoneClose.bind(this)}
        />
        <WYModal
          show={this.state.locWYShow}
          handleShow={this.handleWYShow}
          handleClose={this.handleWYClose.bind(this)}
        />
        <IDModal
          show={this.state.locIDShow}
          handleShow={this.handleIDShow}
          handleClose={this.handleIDClose.bind(this)}
        />
        <HuntingModal
          show={this.state.huntShow}
          handleShow={this.handleHuntShow}
          handleClose={this.handleHuntClose.bind(this)}
        />
        <EventModal
          eventInfo={this.state.eventInfo}
          show={this.state.eventShow}
          handleEventClose={this.handleEventClose.bind(this)}
        />
      </React.Fragment>
    );
  }
}
export default Homepage;
