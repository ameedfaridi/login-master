import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";

const StudentNavBar = (props) => {
  const logout = () => {
    localStorage.removeItem("token");
    return props.history.push("/login");
  };

  return (
    <div className="student-navBar">
      <div>
        <h1 className="logo">
          LEAD <span>Logo</span>
        </h1>
        <div className="stu-nav-right">
          <FontAwesomeIcon icon={faBell} className="bell" />
          <div className="person">
            <FontAwesomeIcon icon={faUser} className="faUser" />
            <h4>Person Name</h4>
            <button className="btn btn-dark Logout" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(StudentNavBar);
