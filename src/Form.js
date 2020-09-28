import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./Form.css";
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function submit(e) {
    e.preventDefault();
    //DO STUFF
    const obj = {};
    obj.fname = firstName;
    obj.lname = lastName;
    obj.email = email;

    console.log(obj);
    alert(JSON.stringify(obj));
    //CLEAR FORM
    setEmail("");
    setFirstName("");
    setLastName("");
  }

  return (
    <form className="Contact">
      <TextField
        variant="outlined"
        label="First Name"
        className="Input"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <TextField
      className="Input"
        variant="outlined"
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <TextField
        className="Input"
        variant="outlined"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        type="text"
        name="email"
        required
      />
      <Button
        variant="contained"
        className="Submit"
        onClick={(e) => {
          submit(e);
        }}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
export default Form;
