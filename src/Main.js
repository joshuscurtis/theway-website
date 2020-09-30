import React from "react";

import Button from "@material-ui/core/Button";

import { Link } from "react-scroll";

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
          <Button size="large" variant="contained">
            <Link
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Our Events
            </Link>
          </Button>
          <Button size="large" variant="contained">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              About Us
            </Link>{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
