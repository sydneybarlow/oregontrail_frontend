import React, { Component } from "react";
import { Fragment, Modal, Button } from "react-bootstrap";

class HuntingModal extends Component {
  render() {
    console.log("HUNTING props", this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>You went hunting!</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            You killed {this.props.food} pounds of food and you used up{" "}
            {this.props.bullets} bullets.
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Next</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default HuntingModal;
