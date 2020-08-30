import React, { Component } from "react";

class Form extends Component {
  getValues = (e) => {
    e.preventDefault();
    const values = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    if (this.props.accountCreated) {
      this.props.accountCreated(values);
    } else if (this.props.loggedValues) {
      this.props.loggedValues(values);
    }
  };

  render() {
    return (
      <form className="form" onSubmit={(e) => this.getValues(e)}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            autoComplete="off"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {this.props.button}
        </button>
      </form>
    );
  }
}

export default Form;
