import React, { Component } from "react";
import { Fragment, Modal, Button } from "react-bootstrap";

class DoneModal extends Component {
  render() {
    let { show, handleShow, handleClose } = this.props;
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>You made it to Oregon City, Oregon!</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={handleClose}>Start Over</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DoneModal;
