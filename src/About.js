import React from "react";
import "./About.css";

import { Box, OpeningTimes, News, Insta } from "./Box";

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
        <img
          alt="the way"
          className="About__img"
          src="https://www.christchurchdunstable.org.uk/wp-content/uploads/Coffee-Shop.jpg"
        />
        <Box title="" content={aboutUs} />
        <div className="About__row2">
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
        </div>
        <div className="About__row2">
                    <Insta title=""  />

        </div>
      </div>
    </div>
  );
}
