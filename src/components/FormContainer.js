import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import LogIn from "./LogIn";
import Homepage from "./Homepage";
import SignUpForm from "./SignUpForm";

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
            if (this.state.form === 'null') {
              <Route
                exact
                path="/signup"
                render={() => (
                  <SignUpForm
                    props={this.props}
                    updateFormType={this.updateFormType}
                    updateUserInfo={this.props.updateUserInfo}
                  />)
            } else if (this.state.form === 'familyForm') {
              <FamilyForm />
            }
          }
            />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(FormContainer);
