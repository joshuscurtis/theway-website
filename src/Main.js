import React from "react";
import Carousel from "nuka-carousel";
import Button from "@material-ui/core/Button";

import { Link } from "react-scroll";
import "./styles.css";

export default function Panel() {
  return (
    <div className="Panel__Main">
      <Carousel autoplay={true} autoplayInterval={5000} wrapAround={true}>
        <div className="bg_1"></div>
        <div className="bg_2"></div>
        <div className="bg_3"></div>
        <div className="bg_4"></div>
      </Carousel>
      <div className="Panel__Box">
        <img alt="test" src="images/logo.jpg" className="logo"></img>
        <div className="Main__Buttons">
          <Button
            size="large"
            className="Menu__Button"
            variant="contained"
            href="/menu"
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
