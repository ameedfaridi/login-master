import React, { Component } from "react";
import Table from "./Table";
import SearchBar from "./SeachBar";

class StudentContent extends Component {
  state = {
    value: "",
  };

  getValue = (e) => {
    e.preventDefault();
    const value = {
      name: e.target.name.value,
      age: e.target.age.value,
      school: e.target.school.value,
      class: e.target.class.value,
      division: e.target.division.value,
    };
    if (this.props.searchValue) {
      return this.props.searchValue(value);
    }
  };

  render() {
    const { Example, value } = this.props;

    const filterData =
      value.length === 0
        ? Example
        : Example.filter(
            (data) =>
              data.name.toLowerCase().includes(value.name.toLowerCase()) &&
              data.age === value.age &&
              data.school.toLowerCase().includes(value.school.toLowerCase()) &&
              data.class === value.class &&
              data.division === value.division
          );

    return (
      <div className="main-content">
        <SearchBar getValue={this.getValue} />
        <Table removeData={this.props.removeData} data={filterData} />
      </div>
    );
  }
}

export default StudentContent;
