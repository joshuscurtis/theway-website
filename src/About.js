import React from "react";
import "./About.css";
import "animate.js";
import { Box, OpeningTimes, News, Insta } from "./Box";

import ScrollAnimation from "react-animate-on-scroll";

export default function Pane() {
  const aboutUs =
    "The Way Coffee House is our newly restored 18th century coffee house, situated on West Street and the ideal place to meet friends, relax on your own or pick up a drink to take away.  Our friendly team serve fresh brewed coffee to suit all styles.  Our coffee is top quality, award winning, hand roasted and Fairtrade.  In addition to coffee we have quality teas, cold drinks, Zuma hot chocolate to satisfy any chocaholic, scrummy cakes and light refreshments – all at affordable prices – see below for our menu.";
  const news = "Now servering Pancakes! ";
  return (
    <div id="about">
      <div className="People__Title__Container">
        <h1 className="People__Title">ABOUT US</h1>
      </div>
      <div className="About__Main">
        <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeIn">
          <img
            alt="the way"
            className="About__img"
            src="https://www.christchurchdunstable.org.uk/wp-content/uploads/Coffee-Shop.jpg"
          />
        </ScrollAnimation>

        <div className="About__row2">
          <ScrollAnimation
            animateOnce={true}
            duration={1}
            animateIn="slideInLeft"
          >
            <Box title="" content={aboutUs} />
          </ScrollAnimation>

          <ScrollAnimation
            animateOnce={true}
            duration={1}
            animateIn="slideInRight"
          >
            <OpeningTimes
              title="Opening Times"
              mon="08:30 - 15:00"
              tue="08:30 - 15:00"
              wed="08:30 - 15:00"
              thu="08:30 - 15:00"
              fri="08:30 - 15:00"
              sat="08:30 - 15:00"
              sun="CLOSED"
            />
          </ScrollAnimation>
        </div>
        <div className="About__row2">
          <ScrollAnimation
            animateOnce={true}
            duration={1}
            animateIn="slideInUp"
          >
            <News title="Latest Updates" content={news} />
          </ScrollAnimation>
        </div>
        <div className="About__row2">
          <ScrollAnimation animateOnce={true} animateIn="fadeIn">
            <Insta title="" />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
