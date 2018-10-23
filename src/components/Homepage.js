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
      mapNum: 1
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

  allHuntFunctions = () => {
    console.log("HUNTING!!");
    this.incrementFood();
    // this.decrementBullets();
    this.handleHuntShow();
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
      const intervalId = setInterval(this.cities, 1000);
      this.setState({ intervalId: intervalId });
    }
  };

  handleDeadClose() {
    this.setState({ deadShow: false });
    this.props.updateFormType("familyForm");
  }

  handleDeadShow() {
    this.setState({ deadShow: true });
  }

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

  cities = () => {
    // console.log("cities");
    if (this.state.miles <= 0) {
      clearInterval(this.state.intervalId);
      this.handleDoneShow();
    } else if (this.state.miles === 720) {
      clearInterval(this.state.intervalId);
      this.allDead();
      this.decrementMiles();
      this.incrementDays();
      this.setState({ locIDShow: true });
    } else if (this.state.miles === 1150) {
      clearInterval(this.state.intervalId);
      this.allDead();
      this.decrementMiles();
      this.incrementDays();
      this.setState({ locWYShow: true });
    } else {
      this.allDead();
      this.decrementMiles();
      this.incrementDays();
    }
  };

  decrementMiles = () => {
    // console.log("miles");
    let newMiles = this.state.miles - 5;
    let newMilesTraveled = this.state.milesTraveled + 5;
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
      this.getRandomEvents
    );
  };

  getRandomEvents = () => {
    const eventIndexNumber =
      Math.floor(Math.random() * this.state.events.length) + 1;
    if (eventIndexNumber <= 7) {
      console.log("modals");
      this.setState(
        {
          eventIndex: eventIndexNumber,
          eventInfo: this.state.events[eventIndexNumber],
          eventShow: true
        },
        this.eventLogic(eventIndexNumber)
      );
      this.rest();
    }
  };

  invokeEventModals = () => {};

  randomAliveFamMember = () => {
    let aliveFam = this.state.family_members.filter(
      fm => fm.status === "alive"
    );
    return aliveFam[Math.floor(Math.random() * aliveFam.length)];
  };

  eventLogic = eventIndex => {
    let randAliveFamObj = this.randomAliveFamMember();
    if (eventIndex === 0) {
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
    } else if (eventIndex === 1) {
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
    } else if (eventIndex === 2) {
      console.log("3: indians");
      this.setState({
        ...this.state,
        supplies: this.state.supplies.map(supply => {
          let newFoodAmount = supply.amount - 400;
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
    } else if (eventIndex === 3) {
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
    } else if (eventIndex === 4) {
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
    } else if (eventIndex === 5) {
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
    } else if (eventIndex === 6) {
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
    } else {
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
    }
  };

  incrementDays = () => {
    let newDays = this.state.days + 1;
    this.setState({
      ...this.state,
      days: newDays
    });
  };

  rest = () => {
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
    // this.betterHealth();
    this.setState({
      ...this.state,
      days: daysToRest,
      supplies: this.state.supplies.map(supply => {
        let newAmount = supply.amount - 400;
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
        if (family.health === "bad") {
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
    // let counter = 0;
    // let allBadHealth = this.state.family_members.filter(
    //   fm => fm.health === "bad"
    // );
    // console.log("===>", allBadHealth);
    // debugger;
    // if (allBadHealth.length != 0 && counter < 11) {
    //   return (
    //     counter++,
    //     this.setState({
    //       ...this.state,
    //       family_members: this.state.family_members.map(fm => {
    //         if (fm.id === allBadHealth.id)
    //           return {
    //             ...fm,
    //             role: "dead"
    //           };
    //       })
    //     })
    //   );
    // }
  };

  allDead = () => {
    let allAliveFam = this.state.family_members.filter(
      fm => fm.status === "alive"
    );
    if (allAliveFam.length === 0) {
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
    // TODO: this should open modal or redirect
    console.log("game over");
    this.setState({
      gameShow: true
    });
    this.rest();
  };

  render() {
    // console.log("render", this.state);
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
        <h2>{this.state.miles} miles from Oregon City</h2>
        <Grid>
          <Row>
            <Col lg={10}>
              <div className="map">
                <Map mapNumber={this.state.mapNum} />
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
                <Button bsStyle="danger" onClick={this.gameOver}>
                  Game Over
                </Button>
                <Button bsStyle="danger" onClick={this.badTooLong}>
                  Bad Too Long
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
