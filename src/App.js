import React, { Component } from "react";
import "./App.css";
import CreateAcc from "./components/CreateAcc";
import LoginAcc from "./components/LoginAcc";
import NavBar from "./components/NavBar";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import AddStudent from "./components/AddStudent";
import StudentContent from "./components/StudentContent";
import SideBar from "./components/SideBar";

class App extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
      createdData: [],
      Example: [
        {
          id: 1,
          age: "18",
          name: "ABC",
          school: "LEAD School karmala",
          class: "3",
          division: "A",
          status: "Active",
        },
        {
          id: 2,
          name: "DEF",
          age: "17",
          school: "XYZ",
          class: "3",
          division: "B",
          status: "Inactive",
        },
        {
          id: 3,
          age: "18",
          name: "GHI",
          school: "LEAD School karmala",
          class: "3",
          division: "A",
          status: "Active",
        },
        {
          id: 4,
          name: "JKL",
          age: "17",
          school: "XYZ",
          class: "3",
          division: "B",
          status: "Inactive",
        },
        {
          id: 5,
          age: "17",
          name: "JKL",
          school: "LEAD School karmala",
          class: "3",
          division: "A",
          status: "Active",
        },
        {
          id: 6,
          name: "ABC",
          age: "17",
          school: "XYZ",
          class: "3",
          division: "B",
          status: "Inactive",
        },
        {
          id: 7,
          age: "18",
          name: "PQR",
          school: "LEAD School karmala",
          class: "3",
          division: "A",
          status: "Active",
        },
        {
          id: 8,
          name: "GHI",
          age: "17",
          school: "XYZ",
          class: "3",
          division: "D",
          status: "Inactive",
        },
      ],
      value: "",
    };
  }
  /* ---------------------------------Account Created-----------------------------*/
  accountCreated = (value) => {
    const createdData = [...this.state.createdData, value];
    localStorage.setItem("Cdata", JSON.stringify(createdData));
    this.setState({
      createdData,
    });
    console.log(this.state.createdData);
  };
  /* ---------------------------------Account Created-----------------------------*/

  /* ---------------------------------Matching Logged Data-----------------------------*/
  loggedData = (value) => {
    const getData = JSON.parse(localStorage.getItem("Cdata"));
    console.log(value);

    if (getData !== null) {
      const user = getData.filter(
        (values) =>
          values.email === value.email && values.password === value.password
      );

      if (user[0] !== undefined) {
        localStorage.setItem("token", "xyz");
        return this.props.history.push("/student");
      } else {
        alert("Wrong Email or password");
      }
    }
  };
  removeData = (id) => {
    const Example = this.state.Example.filter((data) => data.id !== id);
    this.setState({
      Example,
    });
  };

  /* ---------------------------------Matching Logged Data-----------------------------*/

  addStudent = (e) => {
    const ewithID = { ...e, id: this.state.Example.length + 1 };
    const Example = [...this.state.Example, ewithID];
    this.setState({
      Example,
    });
  };

  searchValue = (e) => {
    this.setState({
      value: e,
    });
  };

  render() {
    return (
      <div className="App">
        <Route
          render={() => (
            <div>
              {this.state.loggedIn === true && <Redirect to="/student" />}

              <Switch>
                {/* ---------------------------------Home Comp-----------------------------*/}

                <Route
                  exact
                  path="/"
                  render={() => (
                    <div>
                      <NavBar />
                      <Home />
                    </div>
                  )}
                />

                {/* ---------------------------------Home Comp-----------------------------*/}

                {/* ---------------------------------SignUp Comp-----------------------------*/}
                <Route
                  path="/create"
                  render={({ history }) => (
                    <div>
                      <NavBar />
                      <CreateAcc
                        accountCreated={(value) => {
                          this.accountCreated(value);
                          alert("successfully Created You can Login");
                          return history.push("/login");
                        }}
                      />
                    </div>
                  )}
                />
                {/* ---------------------------------SignUp Comp-----------------------------*/}

                {/* ---------------------------------LogIn Comp-----------------------------*/}

                <Route
                  path="/login"
                  render={() => (
                    <div>
                      <NavBar />
                      <LoginAcc
                        loggedData={(value) => {
                          this.loggedData(value);
                        }}
                      />
                    </div>
                  )}
                />

                {/* ---------------------------------LogIn Comp-----------------------------*/}
              </Switch>
            </div>
          )}
        />

        {/* ---------------------------------User Comp-----------------------------*/}
        <Route
          exact
          path="/student"
          render={() => (
            <div>
              <User />
              <div style={{ display: "flex" }}>
                <SideBar />
                <StudentContent
                  Example={this.state.Example}
                  searchValue={this.searchValue}
                  value={this.state.value}
                  removeData={this.removeData}
                />
              </div>
            </div>
          )}
        />
        <Route
          exact
          path="/student/add"
          render={({ history }) => (
            <div>
              <User />
              <div style={{ display: "flex" }}>
                <SideBar />
                <AddStudent
                  addStudent={(e) => {
                    this.addStudent(e);
                    return history.push("/student");
                  }}
                />
              </div>
            </div>
          )}
        />
        {/* ---------------------------------User Comp-----------------------------*/}
      </div>
    );
  }
}

export default withRouter(App);
