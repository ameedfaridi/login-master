import React, { Component } from "react";
import Form from "./Form";
import { Link } from "react-router-dom";

class LoginAcc extends Component {
  loggedAcc = (e) => {
    if (this.props.loggedData) {
      this.props.loggedData(e);
    }
  };

  render() {
    return (
      <div className="container">
        <label className="create-account">LOGIN </label>
        <Form button="SignIn" loggedValues={this.loggedAcc} />
        <div className="login-more-details">
          <Link to="" className="links">
            Forget Password
          </Link>
          <Link to="/create" className="links">
            Create Account
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginAcc;
