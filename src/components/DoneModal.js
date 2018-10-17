import React, { Component } from "react";
import { Fragment, Modal, Button } from "react-bootstrap";
import "../App.css";

class DoneModal extends Component {
  render() {
    console.log("modal props", this.props);
    return (
      <React.Fragment>
        <Modal show={this.props.show}>
          <Modal.Header>
            <Modal.Title>You made it to Oregon City, Oregon!</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={() => this.props.handleClose()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default DoneModal;
