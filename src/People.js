import React from "react";
import "./styles.css";
import Card from "./Card";
export default function Pane() {
  const baristaOne = "";
  const bookclub = "";
  const cabinfever = "";
  const gameon = "";

  return (
    <div>
      <div className="Pane__Main">
        <div className="People__Card">
          <Card
            img="https://goodcoffeeplace.com/wp-content/uploads/2019/06/Barista-Training.jpg?ezimgfmt=ngcb5/notWebP"
            title="Barista One"
            text={baristaOne}
          />
        </div>
        <div className="About__Card">
          <Card
            img="https://www.christchurchdunstable.org.uk/wp-content/uploads/foodbank.jpg"
            title="Foodbank"
            text={bookclub}
          />
        </div>
        <div className="About__Card">
          <Card
            img="https://www.christchurchdunstable.org.uk/wp-content/uploads/Game-on-snipnsketch.jpg"
            title="Game On!"
            text={gameon}
          />
        </div>
        <div className="About__Card">
          <Card
            img="https://www.christchurchdunstable.org.uk/wp-content/uploads/Cabin-snipnsketch.jpg"
            title="Cabinfever!"
            text={cabinfever}
          />
        </div>
      </div>
    </div>
  );
}
