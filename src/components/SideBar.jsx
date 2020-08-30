import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <div className="main-sidebar">
        <div className="side-container">
          <ul>
            <li
              style={{
                listStyle: "none",
                fontWeight: "700",
                fontSize: "22px",
                textAlign: "left",
                paddingLeft: "20px",
              }}
            >
              Students
            </li>
            <li>
              <Link to="/student">View Students</Link>
            </li>
            <li>
              <Link to="/student/add">Add Student</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
