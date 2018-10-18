import React, { Component } from "react";
import { Fragment, PageHeader } from "react-bootstrap";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

class Userbar extends Component {
  render() {
    // console.log("fm", this.props);
    return (
      <React.Fragment>
        <PageHeader>User: {this.props.username}</PageHeader>
      </React.Fragment>
    );
  }
}

export default Userbar;
