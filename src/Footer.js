import React from "react";

import Form from "./Form";
import "./styles.css";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import ScrollAnimation from "react-animate-on-scroll";

export default function Panel() {
  return (
    <div>
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <div className="Pane__Main">
          <div className="Pane__Box">
            <h1>Contact Us</h1>
            <Form />
          </div>
        </div>
        <div className="Footer">
          <div className="map">
            <iframe
              title="maps"
              width="100%"
              height="300px"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCWoKnIqMOJ1npXjMd3GXbknzUSLWYga0Q
    &q=The+Way+Coffee+House"
              allowfullscreen
            ></iframe>
          </div>
          <div className="Footer__Socials">
            <SocialIcon url="https://www.instagram.com/the_way_dunstable/" />
            <SocialIcon url="https://www.facebook.com/thewaydunstable/" />
            <SocialIcon url="http://youtube.com/" />
          </div>
          <div className="Footer__Content">
            <p> (c) The Way Coffee House</p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
