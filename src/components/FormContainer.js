import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";
import LogIn from "./LogIn";
import Homepage from "./Homepage";
import SignUpForm from "./SignUpForm";
import FamilyForm from "./FamilyForm";
import SuppliesForm from "./SuppliesForm";

class FormContainer extends Component {
  state = {
    userInfo: null,
    form: null,
    userId: null,
    supplies: [],
    familyMembers: []
  };

  updateUserInfo = userInfo => this.setState({ userInfo });

  updateFormType = form => this.setState({ form });

  updateUserIdType = userId => this.setState({ userId });

  updateSupplies = supplies => this.setState({ supplies });

  updateFamilyMembers = familyMembers => this.setState({ familyMembers });

  updateFormTypeToSignUp = form => {
    this.setState({ form: "signUp" });
    this.props.history.push("/signup");
  };

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
    console.log("logout");
    localStorage.clear();
    this.props.history.push("/login");
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
                    updateFormType={this.updateFormType}
                    updateFormTypeToSignUp={this.updateFormTypeToSignUp}
                  />
                ) : (
                  <Alert>Sorry, wrong username or password.</Alert>
                )
              }
            />
            <Route
              exact
              path="/homepage"
              render={() =>
                this.state.userInfo ? (
                  <Homepage
                    {...this.state.userInfo}
                    logout={this.logout}
                    props={this.props}
                    updateFormType={this.updateFormType}
                    famMem={this.state.familyMembers}
                    supplies={this.state.supplies}
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
                    updateUserInfo={this.updateUserInfo}
                    updateUserIdType={this.updateUserIdType}
                  />
                ) : this.state.form === "familyForm" ? (
                  <FamilyForm
                    props={this.props}
                    updateFormType={this.updateFormType}
                    userId={this.state.userId}
                    updateFamilyMembers={this.updateFamilyMembers}
                  />
                ) : this.state.form === "supplyForm" ? (
                  <SuppliesForm
                    props={this.props}
                    updateFormType={this.updateFormType}
                    userId={this.state.userId}
                    updateSupplies={this.updateSupplies}
                  />
                ) : null
              }
            />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(FormContainer);
