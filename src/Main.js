import React from "react";
import Button from "@material-ui/core/Button";

import "./styles.css";
export default function Panel() {
  return (
    <div className="Panel__Main">
      <div className="Panel__Box">
        <img
          alt="test"
          src="https://www.christchurchdunstable.org.uk/wp-content/uploads/Way-254x300.png"
        ></img>
        <div className="Main__Buttons">
          <Button
            size="large"
            className="Menu__Button"
            variant="contained"
            href="https://menu.theway.coffee"
          >
            Our Menu
          </Button>
          <Button
            size="large"
            variant="contained"
            href="#events"
          >
            Our Events
          </Button>
        </div>
      </div>
    </div>
  );
}
