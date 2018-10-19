import React, { Component } from "react";
import { Fragment, Modal, Button } from "react-bootstrap";

class IDModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You made it to Soda Springs, Idaho!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Next</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default IDModal;
