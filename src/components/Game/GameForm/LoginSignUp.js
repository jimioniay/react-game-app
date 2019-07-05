import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import SignUpContainer from './SignUpContainer';

export default class LoginSignUp extends Component {
  state = {
    login: {
      email: '',
      password: '',
    },
    signup: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <LoginContainer {...this.state.login} />
          </div>

          <div className="col-6">
            <SignUpContainer {...this.state.signup} />
          </div>
        </div>
      </div>
    );
  }
}
