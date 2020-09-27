import React from "react";
import "./styles.css";
import Card from "./Card";
export default function Pane() {
  const content =
    "The Way Coffee House is our newly restored 18th century coffee house, situated on West Street and the ideal place to meet friends, relax on your own or pick up a drink to take away.  Our friendly team serve fresh brewed coffee to suit all styles.  Our coffee is top quality, award winning, hand roasted and Fairtrade.  In addition to coffee we have quality teas, cold drinks, Zuma hot chocolate to satisfy any chocaholic, scrummy cakes and light refreshments – all at affordable prices – see below for our menu.";
  const foodbank = "Dunstable Foodbank is an initiative hosted by a number of churches in our town. We are pleased as a church to serve our community in this venture providing food parcels to those in need. Christ Church Dunstable will be hosting a distribution centre at The Way on Tuesday and Friday afternoons between 2.30 & 4.30pm."
  const bookclub = "Book Club takes place on the second Wednesday evening of every month at 7.45pm."
  const cabinfever = "Cabin Fever is our Men’s Shed activity which is open to all. We regularly have demonstrations and talks about tools and techniques, and as equipment, materials and expertise increase, practical sessions will be held so you can try your hand at what you’ve learnt."
  const gameon = "Game On! is for anyone who likes playing board games and meet with friends old and new while enjoying a selection of drinks and snacks from The Way Coffee House.  A selection of games are provided and you are welcome to bring your own."
  
  
  return (
    <div>
      <div className="Pane__Main">
        <div className="About__Card">
          <Card img="https://www.christchurchdunstable.org.uk/wp-content/uploads/Ministry-Posters-Book-Club.jpg" title="Book Club" text={bookclub} />
        </div>
        <div className="About__Card">
          <Card img="https://www.christchurchdunstable.org.uk/wp-content/uploads/foodbank.jpg" title="Foodbank" text={foodbank} />
        </div>
        <div className="About__Card">
          <Card img="https://www.christchurchdunstable.org.uk/wp-content/uploads/Game-on-snipnsketch.jpg" title="Game On!" text={gameon} />
        </div>
        <div className="About__Card">
          <Card img="https://www.christchurchdunstable.org.uk/wp-content/uploads/Cabin-snipnsketch.jpg" title="Cabinfever!" text={cabinfever} />
		  </div>		
      </div>
    </div>
  );
}
