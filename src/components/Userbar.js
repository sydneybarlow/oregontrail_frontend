import React, { Component } from "react";
import { Fragment, PageHeader, Button } from "react-bootstrap";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

class Userbar extends Component {
  render() {
    // console.log("fm", this.props);
    return (
      <React.Fragment>
        <PageHeader>
          User: {this.props.username}
          <div className="logoutButton" style={{ float: "right" }}>
            <Button bsStyle="primary">Logout</Button>
          </div>
        </PageHeader>
      </React.Fragment>
    );
  }
}

export default Userbar;
