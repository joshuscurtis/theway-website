import React from "react";
import "./styles.css";
import Card from "./Card";
export default function Pane() {
  const content =
    "The Way Coffee House is our newly restored 18th century coffee house, situated on West Street and the ideal place to meet friends, relax on your own or pick up a drink to take away.  Our friendly team serve fresh brewed coffee to suit all styles.  Our coffee is top quality, award winning, hand roasted and Fairtrade.  In addition to coffee we have quality teas, cold drinks, Zuma hot chocolate to satisfy any chocaholic, scrummy cakes and light refreshments – all at affordable prices – see below for our menu.";
  return (
    <div>
      <div className="Pane__Main">
        <div className="About__Card">
        <Card
          title="About Us"
          text={content}
        />
        </div>
      </div>
    </div>
  );
}
