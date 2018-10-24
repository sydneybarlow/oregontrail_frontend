import React, { Component } from "react";
import { Fragment, Modal, Button } from "react-bootstrap";

class FamMemberDead extends Component {
  render() {
    // console.log("game over ===>", this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Your family member died</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Bury the dead and move on!</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Keep Going</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FamMemberDead;
