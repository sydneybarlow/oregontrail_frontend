import React, { Component } from "react";
import { Fragment, Modal, Button } from "react-bootstrap";

class HuntingModal extends Component {
  render() {
    console.log(this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You went hunting!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You killed %% pounds of food and you used up %% bullets.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Next</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default HuntingModal;
