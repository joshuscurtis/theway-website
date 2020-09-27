import React from "react";
import Button from "@material-ui/core/Button";
import "./styles.css";

export default function Panel() {
  return (
    <div className="Panel__Main">
      <div className="Panel__Box">
        <h1>The Way Coffee House</h1>
        <Button className="Menu__Button" variant="contained" href="https://menu.theway.coffee">Our Menu</Button>
        <Button variant="contained" href="https://ccd.churchsuite.co.uk/embed/calendar" >Our Events</Button>
      </div>
    </div>
  );
}
