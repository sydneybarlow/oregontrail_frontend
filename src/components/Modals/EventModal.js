import React, { Component } from "react";
import { Fragment, Modal, Button, Image } from "react-bootstrap";

const filePath = process.env.PUBLIC_URL + "imgs/";

class EventModal extends Component {
  render() {
    // console.log("eventmodal this.props", this.props);
    if (this.props.eventInfo === null) {
      return null;
    } else if (this.props.eventInfo.name === "dysentery") {
      return (
        <Modal show={this.props.show} onHide={this.props.handleEventClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Dysentary!</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image
              alt="emoji"
              src={`${filePath}${this.props.eventInfo.name}.png`}
            />
            <h4>One of your family members has dysentary!!!</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleEventClose}>Next</Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.props.eventInfo.name === "broken_arm") {
      return (
        <Modal show={this.props.show} onHide={this.props.handleEventClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Broken Arm!</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image
              alt="emoji"
              src={`${filePath}${this.props.eventInfo.name}.png`}
            />
            <h4>One of your family members has a broken arm!!!</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleEventClose}>Next</Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.props.eventInfo.name === "indians") {
      return (
        <Modal show={this.props.show} onHide={this.props.handleEventClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Indians attack!</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image
              alt="emoji"
              src={`${filePath}${this.props.eventInfo.name}.png`}
            />
            <h4>
              Your caravan has been attacked by indians!!! Lose 150 pounds of
              food.
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleEventClose}>Next</Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.props.eventInfo.name === "dinosaurs") {
      return (
        <Modal show={this.props.show} onHide={this.props.handleEventClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Dinosaurs!</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image
              alt="emoji"
              src={`${filePath}${this.props.eventInfo.name}.png`}
            />
            <h4>One of your family members has been eaten by a dinosouar!!!</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleEventClose}>Next</Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.props.eventInfo.name === "anthrax") {
      return (
        <Modal show={this.props.show} onHide={this.props.handleEventClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Anthrax!</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image
              alt="emoji"
              src={`${filePath}${this.props.eventInfo.name}.png`}
            />
            <h4>One of your family members received anthrax in the mail!!!</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleEventClose}>Next</Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.props.eventInfo.name === "flight") {
      return (
        <Modal show={this.props.show} onHide={this.props.handleEventClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Flight!</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image
              alt="emoji"
              src={`${filePath}${this.props.eventInfo.name}.png`}
            />
            <h4>
              One of your family members decided that walking was a waste of
              time and hopped on a flight!!!
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleEventClose}>Next</Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.props.eventInfo.name === "small_pox") {
      return (
        <Modal show={this.props.show} onHide={this.props.handleEventClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Small Pox!</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image
              alt="emoji"
              src={`${filePath}${this.props.eventInfo.name}.png`}
            />
            <h4>One of your family members has small pox!!!</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleEventClose}>Next</Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.props.eventInfo.name === "zombies") {
      return (
        <Modal show={this.props.show} onHide={this.props.handleEventClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Zombies!</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image
              alt="emoji"
              src={`${filePath}${this.props.eventInfo.name}.png`}
            />
            <h4>One of your family members got eatten by a zombie hoard!!!</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleEventClose}>Next</Button>
          </Modal.Footer>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export default EventModal;
