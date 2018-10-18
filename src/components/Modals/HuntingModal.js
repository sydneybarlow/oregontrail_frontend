import React, { Component } from "react";
import { Fragment, Modal, Button } from "react-bootstrap";

class HuntingModal extends Component {
  render() {
    console.log(this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You made it to Fort Laramie, Wyoming!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Next</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default HuntingModal;
