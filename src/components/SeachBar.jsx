import React from "react";
const School = ["Lead School Karmala", "XYZ"];
const Class = [1, 2, 3, 4, 5, 6, 7, 8];
const Division = ["A", "B", "C", "D"];

const SearchBar = (props) => {
  return (
    <div className="content-container">
      <form className="search-field" onSubmit={(e) => props.getValue(e)}>
        <input
          type="text"
          placeholder="name"
          autoComplete="off"
          name="name"
          required
        />
        <input
          type="text"
          placeholder="Age"
          autoComplete="off"
          name="age"
          required
        />
        <div>
          <select name="school">
            {School.map((x, i) => (
              <option key={i} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select name="class">
            {Class.map((x, i) => (
              <option key={i} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select name="division">
            {Division.map((x, i) => (
              <option key={i} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
