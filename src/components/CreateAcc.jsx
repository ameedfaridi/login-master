import React from "react";
import Form from "./Form";

const CreateAcc = (props) => {
  return (
    <div className="container">
      <label className="create-account">CREATE ACCOUNT</label>
      <Form button="SignUp" accountCreated={props.accountCreated} />
    </div>
  );
};

export default CreateAcc;
