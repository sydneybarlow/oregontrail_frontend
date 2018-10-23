import React, { Component } from "react";
import { Fragment, Modal, Button } from "react-bootstrap";

class GameOver extends Component {
  render() {
    console.log("game over ===>", this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>GAME OVER</Modal.Title>
        </Modal.Header>
        <Modal.Body>Want to start again?</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Start Over</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default GameOver;
