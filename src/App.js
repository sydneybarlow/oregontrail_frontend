import React, { Component } from "react";
import logo from "./logo.svg";
import FormContainer from "./components/FormContainer";

class App extends Component {
  state = {
    userInfo: null
  };

  updateUserInfo = userInfo => this.setState({ userInfo });

  componentDidMount() {
    const url = "http://localhost:3000/users/homepage";
    const token = localStorage.getItem("token");
    if (token) {
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(r => r.json())
        .then(response => {
          this.updateUserInfo(response.user);
          // this.props.history.push("/homepage");
        });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <FormContainer
            userInfo={this.state.userInfo}
            updateUserInfo={this.updateUserInfo}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
