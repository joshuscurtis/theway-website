import React from "react";
import Button from "@material-ui/core/Button";
import "./styles.css";

export default function Panel() {
  return (
    <div className="Panel__Main">
      <div className="Panel__Box">
        <h1>The Way Coffee House</h1>
        <Button variant="contained">Our Menu</Button>
        <Button variant="contained">Our Events</Button>
      </div>
    </div>
  );
}
