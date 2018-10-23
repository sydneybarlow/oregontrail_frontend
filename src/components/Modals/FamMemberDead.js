import React, { Component } from "react";
import { Fragment, Modal, Button } from "react-bootstrap";

class FamMemberDead extends Component {
  render() {
    // console.log("game over ===>", this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your family member died</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bury the dead and move on!</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Keep Going</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FamMemberDead;
