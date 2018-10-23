import React, { Component } from "react";
import { Fragment, PageHeader, Button } from "react-bootstrap";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

class Userbar extends Component {
  render() {
    console.log("user", this.props);
    return (
      <React.Fragment>
        <PageHeader>
          User: {this.props.username}
          <div className="logoutButton" style={{ float: "right" }}>
            <Button bsStyle="primary" onclick={() => this.props.logout}>
              Logout
            </Button>
          </div>
        </PageHeader>
      </React.Fragment>
    );
  }
}

export default Userbar;
