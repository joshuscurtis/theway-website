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
