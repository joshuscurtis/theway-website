import React from "react";

import FloatingActionButton from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/ArrowUpward";

import "./styles.css";
import Header from "./Main";
import About from "./About";
import Events from "./Events";
import People from "./People";

import Footer from "./Footer";

//set to top of page
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

export default function App() {
  const style = {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
    zIndex: 1000
  };

  function toTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="App">
      <FloatingActionButton onClick={toTop} style={style}>
        <AddIcon />
      </FloatingActionButton>
      <Header />
      <About />
      <Events />
      <People />
      <Footer />
    </div>
  );
}
