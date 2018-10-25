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
import GameOver from "./Modals/GameOver";
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
      days: this.props.days,
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
      gameShow: false,
      deadShow: false,
      eventIndex: null,
      intervalId: null,
      milesTraveled: null,
      randomFood: null,
      randomBullets: null,
      mapNum: 1
    };
  }

  handleDoneClose() {
    this.setState({
      doneShow: false,
      intervalId: null,
      eventInfo: null,
      days: 0,
      miles: 1795,
      milesTraveled: null,
      mapNum: 1
    });
    this.props.updateFormType("familyForm");
  }

  handleDoneShow() {
    clearInterval(this.state.intervalId);
    this.setState({
      ...this.state,
      intervalId: null,
      doneShow: true
    });
  }

  handleWYClose() {
    this.setState({
      locWYShow: false,
      miles: this.state.miles - 10
    });
    this.handleGameStart();
  }

  handleWYShow() {
    clearInterval(this.state.intervalId);
    this.setState({
      ...this.state,
      intervalId: null,
      locWYShow: true
    });
  }

  handleIDClose() {
    this.setState({
      locIDShow: false,
      miles: this.state.miles - 10
    });
    this.handleGameStart();
  }

  handleIDShow() {
    clearInterval(this.state.intervalId);
    this.setState({
      ...this.state,
      intervalId: null,
      locIDShow: true
    });
  }

  handleHuntClose = () => {
    this.handleGameStart();
    this.setState({ huntShow: false });
  };

  handleEventClose() {
    this.setState({
      eventShow: false,
      eventId: null,
      eventInfo: null
    });
    this.handleGameStart();
  }

  handleGameClose = () => {
    this.setState({
      ...this.state,
      intervalId: null,
      eventInfo: null,
      days: 0,
      miles: 1795,
      gameShow: false,
      milesTraveled: null,
      mapNum: 1
    });
  };

  handleGameStart = () => {
    // console.log("game start");
    if (!this.state.intervalId) {
      const intervalId = setInterval(this.travelingWithCityStops, 1000);
      this.setState({ intervalId: intervalId });
    }
  };

  handleDeadClose() {
    this.setState({ deadShow: false });
    this.handleGameStart();
    this.props.updateFormType("familyForm");
  }

  handleDeadShow() {
    clearInterval(this.state.intervalId);
    this.setState({
      ...this.state,
      intervalId: null,
      deadShow: true
    });
  }

  allHuntFunctions = () => {
    // console.log("food!!!");
    clearInterval(this.state.intervalId);
    let pounds = Math.floor(Math.random() * 100);
    console.log("rand pounds", pounds);
    this.setState(
      {
        ...this.state,
        intervalId: null,
        huntShow: true,
        randomFood: pounds
      },
      this.incrementFood
    );
  };

  incrementFood = () => {
    // console.log("food STATE", this.state.randomFood);
    this.setState(
      {
        ...this.state,
        supplies: this.state.supplies.map(supply => {
          if (supply.name === "food") {
            let newFoodAmount = supply.amount + this.state.randomFood;
            return {
              ...supply,
              amount: newFoodAmount
            };
          } else {
            return supply;
          }
        })
      },
      this.randomBullets
    );
  };

  randomBullets = () => {
    // console.log("bullets!!!");
    let bullets = Math.floor(Math.random() * 35);
    this.setState(
      {
        randomBullets: bullets
      },
      this.decrementBullets
    );
  };

  decrementBullets = () => {
    // console.log("lossing bullets");
    this.setState({
      ...this.state,
      supplies: this.state.supplies.map(supply => {
        if (supply.name === "bullets") {
          let newBulletAmount = supply.amount - this.state.randomBullets;
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

  travelingWithCityStops = () => {
    // console.log("cities");
    if (this.state.miles <= 0) {
      clearInterval(this.state.intervalId);
      this.handleDoneShow();
    } else if (this.state.miles === 720) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
      this.setState({ locIDShow: true });
    } else if (this.state.miles === 1150) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
      this.setState({ locWYShow: true });
    } else {
      this.tooManyDays();
      this.allDead();
      this.decrementMiles();
      this.incrementDays();
    }
  };

  decrementMiles = () => {
    // console.log("miles");
    let newMiles = this.state.miles - 10;
    let newMilesTraveled = this.state.milesTraveled + 10;
    this.setState(
      {
        ...this.state,
        miles: newMiles,
        milesTraveled: newMilesTraveled
      },
      this.decrementFood
    );
    this.renderMap();
  };

  decrementFood = () => {
    // console.log("food");
    this.setState(
      {
        ...this.state,
        supplies: this.state.supplies.map(supply => {
          if (supply.name === "food") {
            let newFoodAmount = supply.amount - 21;
            return {
              ...supply,
              amount: newFoodAmount
            };
          } else {
            return supply;
          }
        })
      },
      this.getRandomEvents
    );
  };

  // stopAtNoFood = () => {
  //   this.state.supplies.map(supply => {
  //     if (supply.name === "bullets" && supply.amount <= 0) {
  //       this.setState({
  //         ...supply,
  //         amount: 0
  //       });
  //     }
  //   });
  //   this.getRandomEvents();
  // };

  getRandomEvents = () => {
    const eventIndexNumber =
      Math.floor(Math.random() * this.props.events.length) + 1;
    console.log("eventindexNumber ***", eventIndexNumber);
    if (eventIndexNumber <= 7) {
      console.log("modals");
      this.setState(
        {
          eventIndex: eventIndexNumber,
          eventInfo: this.props.events[eventIndexNumber],
          eventShow: true
        },
        this.eventLogic(eventIndexNumber)
      );
      this.stopIntervalOnly();
    }
  };

  invokeEventModals = () => {};

  randomAliveFamMember = () => {
    let aliveFam = this.state.family_members.filter(
      fm => fm.status === "alive"
    );
    return aliveFam[Math.floor(Math.random() * aliveFam.length)];
  };

  eventLogic = eventIndexNumber => {
    let randAliveFamObj = this.randomAliveFamMember();
    if (eventIndexNumber === 0) {
      console.log("1: dysentery");
      this.setState({
        ...this.state,
        family_members: this.state.family_members.map(famMem => {
          if (famMem.id === randAliveFamObj.id) {
            return {
              ...famMem,
              health: "bad"
            };
          } else {
            return famMem;
            this.handleGameStart();
          }
        })
      });
    } else if (eventIndexNumber === 1) {
      console.log("2: broken arm");
      this.setState({
        ...this.state,
        family_members: this.state.family_members.map(fammem => {
          if (fammem.id === randAliveFamObj.id) {
            return {
              ...fammem,
              health: "bad"
            };
          } else {
            return fammem;
            this.handleGameStart();
          }
        })
      });
    } else if (eventIndexNumber === 2) {
      console.log("3: indians");
      this.setState({
        ...this.state,
        supplies: this.state.supplies.map(supply => {
          let newFoodAmount = supply.amount - 150;
          if (supply.name === "food") {
            return {
              ...supply,
              amount: newFoodAmount
            };
          } else {
            return supply;
            this.handleGameStart();
          }
        })
      });
    } else if (eventIndexNumber === 3) {
      console.log("4: dinosuars");
      this.setState({
        ...this.state,
        family_members: this.state.family_members.map(famMem => {
          if (famMem.id === randAliveFamObj.id) {
            return {
              ...famMem,
              health: "bad",
              status: "dead",
              role: "dead"
            };
          } else {
            return famMem;
            this.handleGameStart();
          }
        })
      });
    } else if (eventIndexNumber === 4) {
      console.log("5: anthrax");
      this.setState({
        ...this.state,
        family_members: this.state.family_members.map(famMem => {
          if (famMem.id === randAliveFamObj.id) {
            return {
              ...famMem,
              health: "bad"
            };
          } else {
            return famMem;
            this.handleGameStart();
          }
        })
      });
    } else if (eventIndexNumber === 5) {
      console.log("6: flight");
      this.setState({
        ...this.state,
        family_members: this.state.family_members.map(fammem => {
          if (fammem.id === randAliveFamObj.id) {
            return {
              ...fammem,
              health: "bad",
              status: "dead",
              role: "dead"
            };
          } else {
            return fammem;
            this.handleGameStart();
          }
        })
      });
    } else if (eventIndexNumber === 6) {
      console.log("7: small pox");
      this.setState({
        ...this.state,
        family_members: this.state.family_members.map(fammem => {
          if (fammem.id === randAliveFamObj.id) {
            return {
              ...fammem,
              health: "bad"
            };
          } else {
            return fammem;
            this.handleGameStart();
          }
        })
      });
    } else if (eventIndexNumber === 7) {
      console.log("8: zombie");
      this.setState({
        ...this.state,
        family_members: this.state.family_members.map(fammem => {
          if (fammem.id === randAliveFamObj.id) {
            return {
              ...fammem,
              health: "bad",
              status: "dead",
              role: "dead"
            };
          } else {
            return fammem;
            this.handleGameStart();
          }
        })
      });
    } else {
      return null;
    }
  };

  incrementDays = () => {
    let newDays = this.state.days + 1;
    this.setState({
      ...this.state,
      days: newDays
    });
  };

  stopIntervalOnly = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  };

  handleRest = () => {
    // console.log("RESTING!!!!");
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null }, this.daysToRest());
  };

  daysToRest = () => {
    // console.log("sick Fam Mem ===>", sickFamMember);
    let daysToRest = this.state.days + 4;
    let aliveFam = this.state.family_members.filter(
      fm => fm.status === "alive"
    );
    this.setState({
      ...this.state,
      days: daysToRest,
      supplies: this.state.supplies.map(supply => {
        let newAmount = supply.amount - 80;
        if (supply.name === "food") {
          return {
            ...supply,
            amount: newAmount
          };
        } else {
          return supply;
        }
      }),
      family_members: this.state.family_members.map(family => {
        // console.log(family);
        if (family.status === "dead") {
          return family;
        } else if (family.health === "bad") {
          return {
            ...family,
            health: "poor"
          };
        } else if (family.health === "poor") {
          return {
            ...family,
            health: "fair"
          };
        } else {
          return {
            ...family,
            health: "good"
          };
        }
      })
    });
  };

  badTooLong = () => {
    console.log("bad too long");
  };

  allDead = () => {
    let allAliveFam = this.state.family_members.filter(
      fm => fm.status === "alive"
    );
    if (allAliveFam.length === 0) {
      this.gameOver();
    }
  };

  tooManyDays = () => {
    if (this.state.days > 260) {
      this.gameOver();
    }
  };

  renderMap = () => {
    let newMap = this.state.mapNum + 1;
    if (this.state.milesTraveled === 60) {
      this.setState({
        mapNum: newMap,
        milesTraveled: null
      });
    }
  };

  gameOver = () => {
    this.setState({
      gameShow: true
    });
    this.stopIntervalOnly();
  };

  render() {
    // console.log("homepage props ==>", this.props.events);
    // console.log("homepage STATE +", this.state.randomFood);
    return (
      <React.Fragment>
        <Userbar username={this.state.username} />
        <Grid>
          <Row className="show-grid">
            <Col lg={4} lgPull={3}>
              <FamilyMember family_members={this.state.family_members} />
            </Col>
            <Col lg={6} lgOffset={2}>
              <Supply
                supplies={this.state.supplies}
                money={this.state.money}
                days={this.state.days}
              />
            </Col>
          </Row>
        </Grid>
        <h1> {this.state.miles} miles from Oregon City </h1>
        <Grid>
          <Row>
            <Col lg={10}>
              <div className="map">
                <Map mapNumber={this.state.mapNum} />
              </div>
            </Col>
            <Col lg={2} lgPush={1}>
              <ButtonGroup vertical bsSize="large">
                <Button
                  bsStyle="primary"
                  bsSize="large"
                  onClick={this.handleGameStart}
                >
                  Get Goin!
                </Button>
                <Button
                  bsStyle="info"
                  bsSize="large"
                  onClick={this.allHuntFunctions}
                >
                  Hunt
                </Button>
                <Button
                  bsStyle="success"
                  bsSize="large"
                  onClick={this.handleRest}
                >
                  Rest
                </Button>
                <Button
                  bsStyle="default"
                  bsSize="large"
                  onClick={this.props.logout}
                >
                  Logout
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
        <DoneModal
          show={this.state.doneShow}
          handleClose={this.handleDoneClose.bind(this)}
        />
        <WYModal
          show={this.state.locWYShow}
          handleClose={this.handleWYClose.bind(this)}
        />
        <IDModal
          show={this.state.locIDShow}
          handleClose={this.handleIDClose.bind(this)}
        />
        <HuntingModal
          show={this.state.huntShow}
          food={this.state.randomFood}
          bullets={this.state.randomBullets}
          handleClose={this.handleHuntClose.bind(this)}
        />
        <EventModal
          eventInfo={this.state.eventInfo}
          show={this.state.eventShow}
          handleEventClose={this.handleEventClose.bind(this)}
        />
        <GameOver
          show={this.state.gameShow}
          handleClose={this.handleGameClose.bind(this)}
        />
        <GameOver
          show={this.state.deadShow}
          handleClose={this.handleDeadClose.bind(this)}
        />
      </React.Fragment>
    );
  }
}
export default Homepage;
