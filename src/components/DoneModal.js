import React, { Component } from "react";
import { Fragment, Modal, Button } from "react-bootstrap";

class DoneModal extends Component {
  render() {
    console.log(this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You made it to Oregon City, Oregon!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Start Over</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DoneModal;
