import React, { Component } from "react";
import { Fragment, Modal, Button } from "react-bootstrap";

class EventModal extends Component {
  render() {
    console.log(this.props.eventInfo);
    if (this.props.eventInfo === null) {
      return null;
    } else {
      if (this.props.eventInfo.name === "dysentary") {
        return (
          <Modal show={this.props.show} onHide={this.props.handleEventClose}>
            <Modal.Header closeButton>
              <Modal.Title>Dysentary!</Modal.Title>
            </Modal.Header>
            <Modal.Body>One of your family members has dysentary!!!</Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.handleEventClose}>Next</Button>
            </Modal.Footer>
          </Modal>
        );
      } else if (this.props.eventInfo.name === "broken arm") {
        return (
          <Modal show={this.props.show} onHide={this.props.handleEventClose}>
            <Modal.Header closeButton>
              <Modal.Title>Broken Arm!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              One of your family members has a brokan arm!!!
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
              <Modal.Title>Indians attack!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Your caravan has been attacked by indians!!!
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
              <Modal.Title>Dinosaurs!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              One of your family members has been eaten by a dinosouar!!!
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
              <Modal.Title>Anthrax!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              One of your family members received anthrax in the mail!!!
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
              <Modal.Title>Flight!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              One of your family members decided that walking was a waste of
              time and hopped on a flight!!!
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.handleEventClose}>Next</Button>
            </Modal.Footer>
          </Modal>
        );
      } else if (this.props.eventInfo.name === "small pox") {
        return (
          <Modal show={this.props.show} onHide={this.props.handleEventClose}>
            <Modal.Header closeButton>
              <Modal.Title>Dysentary!</Modal.Title>
            </Modal.Header>
            <Modal.Body>One of your family members has small pox!!!</Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.handleEventClose}>Next</Button>
            </Modal.Footer>
          </Modal>
        );
      } else if (this.props.eventInfo.name === "zombie") {
        return (
          <Modal show={this.props.show} onHide={this.props.handleEventClose}>
            <Modal.Header closeButton>
              <Modal.Title>Dysentary!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              One of your family members got eatten by a zombie hoard!!!
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
}

export default EventModal;
