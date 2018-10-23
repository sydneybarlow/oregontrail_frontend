import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import LogIn from "./LogIn";
import Homepage from "./Homepage";
import SignUpForm from "./SignUpForm";
import FamilyForm from "./FamilyForm";
import SuppliesForm from "./SuppliesForm";

class FormContainer extends Component {
  state = {
    userInfo: null,
    form: null,
    userId: null
  };

  updateUserInfo = userInfo => this.setState({ userInfo });

  updateFormType = form => this.setState({ form });

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
          this.props.history.push("/homepage");
        });
    }
  }

  logout = () => {
    localStorage.clear();
    this.setState({ userInfo: null });
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/login"
              render={() =>
                this.state.form === null ? (
                  <LogIn
                    props={this.props}
                    updateUserInfo={this.updateUserInfo}
                  />
                ) : this.state.form === "familyForm" ? (
                  <FamilyForm
                    props={this.props}
                    updateFormType={this.updateFormType}
                    userId={this.state.userId}
                  />
                ) : (
                  <SuppliesForm
                    props={this.props}
                    updateFormType={this.updateFormType}
                    userId={this.state.userId}
                  />
                )
              }
            />
            <Route
              exact
              path="/homepage"
              render={() =>
                this.state.userInfo && this.state.form === null ? (
                  <Homepage
                    {...this.state.userInfo}
                    logout={this.logout}
                    props={this.props}
                    updateFormType={this.updateFormType}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/signup"
              render={() =>
                this.state.form === "signUp" ? (
                  <SignUpForm
                    props={this.props}
                    updateFormType={this.updateFormType}
                    updateUserInfo={this.props.updateUserInfo}
                    updateUserIdType={this.updateUserIdType}
                  />
                ) : this.state.form === "familyForm" ? (
                  <FamilyForm
                    props={this.props}
                    updateFormType={this.updateFormType}
                    userId={this.state.userId}
                  />
                ) : (
                  <SuppliesForm
                    props={this.props}
                    updateFormType={this.updateFormType}
                    userId={this.state.userId}
                  />
                )
              }
            />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(FormContainer);
