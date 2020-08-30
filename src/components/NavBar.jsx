import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>LOGO</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Sign-IN</Link>
        </li>
        <li>
          <Link to="/create">Sign-Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
