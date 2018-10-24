import React, { Component } from "react";
import { Fragment, Modal, Button } from "react-bootstrap";

class GameOver extends Component {
  render() {
    // console.log("game over ===>", this.props);
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>GAME OVER</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Want to start again?</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Start Over</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default GameOver;
