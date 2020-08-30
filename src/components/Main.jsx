import React, { Component } from "react";
import App from "../App";
import { withRouter } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

export default withRouter(Main);
