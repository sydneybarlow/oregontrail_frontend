import React, { Component } from "react";
import {
  Fragment,
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Alert,
  Grid,
  Row,
  Col,
  Image
} from "react-bootstrap";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

class FamilyForm extends Component {
  constructor() {
    super();
    this.state = {
      user_id: null,
      name1: "",
      name2: "",
      name3: "",
      name4: "",
      role1: "",
      role2: "",
      role3: "",
      role4: "",
      health: "good",
      status: "alive"
    };
  }

  handleNameOne = e => {
    this.setState({ name1: e.target.value });
  };

  handleNameTwo = e => {
    this.setState({ name2: e.target.value });
  };

  handleNameThree = e => {
    this.setState({ name3: e.target.value });
  };

  handleNameFour = e => {
    this.setState({ name4: e.target.value });
  };

  handleAvatarOne = e => {
    this.setState({
      role1: e
    });
  };

  handleAvatarTwo = e => {
    this.setState({
      role2: e
    });
  };

  handleAvatarThree = e => {
    this.setState({
      role3: e
    });
  };

  handleAvatarFour = e => {
    this.setState({
      role4: e
    });
  };

  handleSignInSubmit = e => {
    e.preventDefault();
    let data = {
      family_member: [
        {
          user_id: this.props.userId,
          name: e.target.children[0].children[1].value,
          health: "good",
          status: "alive",
          role: e.currentTarget.children[1].children[1].getElementsByClassName(
            "btn btn-default active"
          )[0].children[0].value
        },
        {
          user_id: this.props.userId,
          name: e.target.children[2].children[1].value,
          health: "good",
          status: "alive",
          role: e.currentTarget.children[3].children[1].getElementsByClassName(
            "btn btn-default active"
          )[0].children[0].value
        },
        {
          user_id: this.props.userId,
          name: e.target.children[4].children[1].value,
          health: "good",
          status: "alive",
          role: e.currentTarget.children[5].children[1].getElementsByClassName(
            "btn btn-default active"
          )[0].children[0].value
        },
        {
          user_id: this.props.userId,
          name: e.target.children[6].children[1].value,
          health: "good",
          status: "alive",
          role: e.currentTarget.children[7].children[1].getElementsByClassName(
            "btn btn-default active"
          )[0].children[0].value
        }
      ]
    };
    fetch(`http://localhost:3000/family_members`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(r => r.json())
      .then(userData => {
        // console.log("famForm userdata", userData);
        this.props.updateFormType("supplyForm");
        this.props.updateFamilyMembers(userData);
      });
  };

  render() {
    // console.log("FAmily form props %%%", this.props)
    return (
      <React.Fragment>
        <Image alt="oregon trail logo" src={`${filePath}OregonTrailLogo.png`} />
        <h3>Make Your Family</h3>
        <Grid>
          <Row>
            <Col lg={10} lgPush={2}>
              <Form onSubmit={this.handleSignInSubmit}>
                <FormGroup>
                  <ControlLabel>Name 1:</ControlLabel>
                  <FormControl
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleNameOne}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Pick Avatar 1</ControlLabel>
                  <ToggleButtonGroup
                    name="options"
                    type="radio"
                    value={this.state.role1}
                    onChange={this.handleAvatarOne}
                  >
                    <ToggleButton value={"pops"}>
                      <Image alt="father avatar" src={`${filePath}pops.png`} />
                    </ToggleButton>
                    <ToggleButton value={"momma"}>
                      <Image alt="father avatar" src={`${filePath}momma.png`} />
                    </ToggleButton>
                    <ToggleButton value={"boy"}>
                      <Image alt="father avatar" src={`${filePath}boy.png`} />
                    </ToggleButton>
                    <ToggleButton value={"girl"}>
                      <Image alt="father avatar" src={`${filePath}girl.png`} />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Name 2:</ControlLabel>
                  <FormControl
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleNameTwo}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Pick Avatar 2</ControlLabel>
                  <ToggleButtonGroup
                    name="options"
                    type="radio"
                    value={this.state.role2}
                    onChange={this.handleAvatarTwo}
                  >
                    <ToggleButton value={"pops"}>
                      <Image alt="father avatar" src={`${filePath}pops.png`} />
                    </ToggleButton>
                    <ToggleButton value={"momma"}>
                      <Image alt="father avatar" src={`${filePath}momma.png`} />
                    </ToggleButton>
                    <ToggleButton value={"boy"}>
                      <Image alt="father avatar" src={`${filePath}boy.png`} />
                    </ToggleButton>
                    <ToggleButton value={"girl"}>
                      <Image alt="father avatar" src={`${filePath}girl.png`} />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Name 3:</ControlLabel>
                  <FormControl
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleNameThree}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Pick Avatar 3</ControlLabel>
                  <ToggleButtonGroup
                    name="options"
                    type="radio"
                    value={this.state.role3}
                    onChange={this.handleAvatarThree}
                  >
                    <ToggleButton value={"pops"}>
                      <Image alt="father avatar" src={`${filePath}pops.png`} />
                    </ToggleButton>
                    <ToggleButton value={"momma"}>
                      <Image alt="father avatar" src={`${filePath}momma.png`} />
                    </ToggleButton>
                    <ToggleButton value={"boy"}>
                      <Image alt="father avatar" src={`${filePath}boy.png`} />
                    </ToggleButton>
                    <ToggleButton value={"girl"}>
                      <Image alt="father avatar" src={`${filePath}girl.png`} />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Name 4:</ControlLabel>
                  <FormControl
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleNameFour}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Pick Avatar 4</ControlLabel>
                  <ToggleButtonGroup
                    name="options"
                    type="radio"
                    value={this.state.role4}
                    onChange={this.handleAvatarFour}
                  >
                    <ToggleButton value={"pops"}>
                      <Image alt="father avatar" src={`${filePath}pops.png`} />
                    </ToggleButton>
                    <ToggleButton value={"momma"}>
                      <Image alt="father avatar" src={`${filePath}momma.png`} />
                    </ToggleButton>
                    <ToggleButton value={"boy"}>
                      <Image alt="father avatar" src={`${filePath}boy.png`} />
                    </ToggleButton>
                    <ToggleButton value={"girl"}>
                      <Image alt="father avatar" src={`${filePath}girl.png`} />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </FormGroup>
                <Button type="submit" bsStyle="info">
                  Enter
                </Button>
              </Form>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default FamilyForm;
