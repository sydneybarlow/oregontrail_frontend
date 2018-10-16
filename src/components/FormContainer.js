import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import LogIn from "./LogIn";
import Homepage from "./Homepage";
import SignUpForm from "./SignUpForm";
import FamilyForm from "./FamilyForm";
import SuppliesForm from "./SuppliesForm";

class FormContainer extends Component {
  state = {
    form: null
  };

  updateFormType = form => this.setState({ form });

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/login"
              render={() => (
                <LogIn
                  props={this.props}
                  updateUserInfo={this.props.updateUserInfo}
                />
              )}
            />
            <Route
              exact
              path="/homepage"
              render={() =>
                this.props.userInfo ? (
                  <Homepage {...this.state.userInfo} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/signup"
              render={() =>
                this.state.form === null ? (
                  <SignUpForm
                    props={this.props}
                    updateFormType={this.updateFormType}
                    updateUserInfo={this.props.updateUserInfo}
                  />
                ) : this.state.form === "familyForm" ? (
                  <FamilyForm
                    props={this.props}
                    updateFormType={this.updateFormType}
                    updateUserInfo={this.props.updateUserInfo}
                  />
                ) : (
                  <SuppliesForm
                    props={this.props}
                    updateFormType={this.updateFormType}
                    updateUserInfo={this.props.updateUserInfo}
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
