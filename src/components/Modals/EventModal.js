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
              <Modal.Title>Dysentary!</Modal.Title>
            </Modal.Header>
            <Modal.Body>One of your family members has dysentary!!!</Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.handleEventClose}>Next</Button>
            </Modal.Footer>
          </Modal>
        );
      } else if (this.props.eventInfo.name === "indians") {
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
      } else if (this.props.eventInfo.name === "dinosaurs") {
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
      } else if (this.props.eventInfo.name === "anthrax") {
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
      } else if (this.props.eventInfo.name === "flight") {
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
      } else if (this.props.eventInfo.name === "small pox") {
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
      } else if (this.props.eventInfo.name === "zombie") {
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
      } else {
        return null;
      }
    }
  }
}

export default EventModal;
