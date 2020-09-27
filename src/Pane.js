import React from "react";
import "./styles.css";
import Card from "./Card"
export default function Pane() {
  return (
    <div className="Pane__Main">
      <div className="Pane__Box">
        <Card className="Card"/>
      </div>
      <div className="Pane__Box">
        <Card/>
      </div>
    </div>
  );
}
