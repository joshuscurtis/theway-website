import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function BasicTextFields() {
  return (
    <form
      id="myform"
      action="/text"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitted form!");
      }}
    >
      <TextField name="email" hintText="Email"/>
      <TextField name="firstname" type="text"/>
      <div
        style={{
          textAlign: "right",
          padding: 8,
          margin: "24px -24px -24px -24px"
        }}
      >
        <Button
          label="Submit"
          type="submit" //set the buttom type is submit
          form="myform" //target the form which you want to sent
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
