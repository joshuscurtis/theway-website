import React from "react";

//import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";

import Product from "./Product";
export default function ItemBuilder(props) {
  const menu = props.menu;
  const type = props.type;
  if (props.menu === "loading") {
    return <CircularProgress className="load" />;
  } else {
    var rows = [];
    if (type === "drinks") {
      return (
        <div className="Menu__Container">
          <div className="Menu__Title"></div>
          <img
            className="menuimage"
            alt=""
            src="https://www.christchurchdunstable.org.uk/theway/images/min/drinks-min.jpg"
          ></img>
        </div>
      );
    }

    if (type === "cakes") {
      for (var i = 0; i < menu.length; i++) {
        if (type === menu[i].type && menu[i].forSale === true) {
          rows.push(
            <Product
              key={menu[i].name}
              name={menu[i].name}
              price={menu[i].price}
              desc={menu[i].desc}
              image={menu[i].image}
              allegens={menu[i].allegens}
            />
          );
        }
      }
    }
    return (
      <div className="Menu__Container">
        <div className="Menu__Title">
          <div className="Menu__Title" variant="h5" component="h5">
            {props.type}
          </div>
        </div>
        <div className="Menu__Items">{rows}</div>
      </div>
    );
  }
}
