import React, { useState } from "react";
import Carousel from "nuka-carousel";

import Button from "@material-ui/core/Button";

import { Link } from "react-scroll";
import "./styles.css";
export default function Panel() {    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/09/20/istock-157528129.jpg?width=982&height=726"
  );

  return (
    <div className="Panel__Main">
        <Carousel>
          <img alt="" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/09/20/istock-157528129.jpg?width=982&height=726" />
          <img alt="" src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
          <img alt="" src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
        </Carousel>
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
