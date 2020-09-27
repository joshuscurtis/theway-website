import React from "react";
import Button from "@material-ui/core/Button";
import "./styles.css";

export default function Panel() {
  return (
    <div className="Panel__Main">
      <div className="Panel__Box">
        <h1>Sign up to keep in contact with the latest updates from us.
        </h1>
        <Button
          className="Menu__Button"
          variant="contained"
          size="large"
          href="https://ccd.churchsuite.co.uk/embed/addressbook/form"
        >
         Sign up
        </Button>
      </div>
    </div>
  );
}
