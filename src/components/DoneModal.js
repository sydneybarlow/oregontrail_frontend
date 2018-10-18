import React, { Component } from "react";
import { Fragment, Modal, Button } from "react-bootstrap";
import "../App.css";

class DoneModal extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <body className="modal-open" style={{ overflow: "hidden" }}>
          <div
            role="dialog"
            tabindex="-1"
            className="fade in modal"
            style={[{ display: "block" }, { "padding-left": "0px" }]}
          >
            <div className="fade in modal">
              <Modal show={this.props.show}>
                <div className="modal-dialog">
                  <div className="modal-content" role="document">
                    <div className="modal-header">
                      <div className="modal-title">
                        You made it to Oregon City, Oregon!
                      </div>
                    </div>
                    <Modal.Footer>
                      <Button onClick={() => this.props.handleClose()}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </body>
      </React.Fragment>
    );
  }
}

export default DoneModal;
