import React, { Component } from "react";
import { Fragment, Modal, Button } from "react-bootstrap";

class EventModal extends Component {
  render() {
    console.log(this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.handleEventClose}>
        <Modal.Header closeButton>
          <Modal.Title>Events!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Life Sucks!!!</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleEventClose}>Next</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EventModal;
