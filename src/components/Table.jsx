import React from "react";

const Thead = [
  "ID",
  "Name",
  "Age",
  "School",
  "Class",
  "Division",
  "Status",
  "",
];

const Table = (props) => {
  return (
    <div className="table-div">
      <table className="table">
        <thead>
          <tr>
            {Thead.map((head, index) => (
              <td key={index}>{head}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.school}</td>
                <td>{student.class}</td>
                <td>{student.division}</td>
                <td>{student.status}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    style={{ outline: "none" }}
                    onClick={() => props.removeData(student.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
