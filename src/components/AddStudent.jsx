import React from "react";

const Class = ["1", "2", "3", "4", "5", "6", "7", "8"];

const AddStudent = (props) => {
  const getValue = (e) => {
    e.preventDefault();
    const value = {
      name: e.target.name.value,
      age: e.target.age.value,
      school: e.target.school.value,
      class: e.target.class.value,
      division: e.target.division.value,
      status: e.target.status.value,
    };
    if (props.addStudent) {
      props.addStudent(value);
    }
  };

  return (
    <div className="main-content">
      <form className="add-form" onSubmit={(e) => getValue(e)}>
        <h2 className="heading">Add Student</h2>
        <div>
          <label>Full Name</label>
          <input type="text" name="name" autoComplete="off" required />
        </div>
        <div>
          <label>Age</label>
          <input type="text" name="age" required autoComplete="off" />
        </div>
        <div>
          <label>School</label>
          <select name="school">
            <option value="LEAD school karmala">LEAD school karmala</option>
            <option value="XYZ">XYZ</option>
          </select>
        </div>
        <div>
          <label>Class</label>
          <select name="class">
            {Class.map((x, i) => (
              <option key={i} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Division</label>
          <select name="division">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <div>
          <label>Status</label>
          <div>
            <input
              type="radio"
              name="status"
              value="Active"
              id="status"
              style={{ width: "50px", marginTop: "5px", padding: "0" }}
              required
            />
            <span>Active</span>
            <input
              type="radio"
              name="status"
              id="status"
              value="Inactive"
              style={{ width: "40px", marginTop: "5px", paddingTop: "0" }}
            />
            <span>Inactive</span>
          </div>
        </div>
        <button className="btn btn-primary ml-5">Add</button>
      </form>
    </div>
  );
};

export default AddStudent;
