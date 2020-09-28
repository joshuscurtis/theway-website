import React from "react";
import Button from "@material-ui/core/Button";

import Form from "./Form";
import "./styles.css";

export default function Panel() {
  return (
    <div className="Pane__Main">
      <div className="Pane__Box">
        <h1>Sign up to keep in contact with the latest updates from us.</h1>
        <Form/>
      </div>
    </div>
  );
}