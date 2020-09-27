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
        <div className="People__Card">
          <Card
            img="https://goodcoffeeplace.com/wp-content/uploads/2019/06/Barista-Training.jpg?ezimgfmt=ngcb5/notWebP"
            title="Barista One"
            text={baristaOne}
          />
		  </div>
        <div className="People__Card">
          <Card
            img="https://goodcoffeeplace.com/wp-content/uploads/2019/06/Barista-Training.jpg?ezimgfmt=ngcb5/notWebP"
            title="Barista One"
            text={baristaOne}
          />
        </div>
        <div className="People__Card">
          <Card
            img="https://goodcoffeeplace.com/wp-content/uploads/2019/06/Barista-Training.jpg?ezimgfmt=ngcb5/notWebP"
            title="Barista One"
            text={baristaOne}
          />
		  </div>
      </div>
    </div>
  );
}
