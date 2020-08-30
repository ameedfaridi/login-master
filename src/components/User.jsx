import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import StudentNavBar from "./StudentNavBar";

class User extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="user">
        <div>
          <StudentNavBar />
        </div>
      </div>
    );
  }
}

export default User;
