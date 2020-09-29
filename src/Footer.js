import React from "react";
import Button from "@material-ui/core/Button";

import Form from "./Form";
import "./styles.css";

export default function Panel() {
  return (
    <div className="Pane__Main">
      <div className="Pane__Box">
        <h1>Sign Up</h1>
        <Form/>
      </div>
    </div>
  );
}