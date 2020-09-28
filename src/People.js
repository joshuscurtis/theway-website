import React from "react";
import "./People.css";
import Card from "./PeopleCard";

export default function Pane() {
  const baristaOne = "I make coffee...";
  const comWorker = "I help people...";
  const kitchenWorker = "I cook stuff...";

  return (
    <div className="People__Main">
      <Card
        img="https://goodcoffeeplace.com/wp-content/uploads/2019/06/Barista-Training.jpg?ezimgfmt=ngcb5/notWebP"
        title="Barista One"
        text={baristaOne}
      />
      <Card
        img="https://goodcoffeeplace.com/wp-content/uploads/2019/06/Barista-Training.jpg?ezimgfmt=ngcb5/notWebP"
        title="Barista Two"
        text={baristaOne}
      />
      <Card
        img="https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1538591947883_mainnews2012_x1.jpg"
        title="Community Worker"
        text={comWorker}
      />
      <Card
        img="https://i.guim.co.uk/img/media/5a5250cd6c465b13d9f6fa6766f037aedee0abd0/0_15_1382_829/master/1382.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a13e0fd2bdf5e7f80847ed9a1ee59d0a"
        title="Kitchen"
        text={kitchenWorker}
      />
    </div>
  );
}
