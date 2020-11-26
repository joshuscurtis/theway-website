import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollableSection, { ScrollableLink } from 'react-update-url-on-scroll';

import FloatingActionButton from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/ArrowUpward";
import { Link } from "react-scroll";

import "./styles.css";
import Header from "./Main";
import About from "./About";
import Events from "./Events";
import People from "./People";
import Footer from "./Footer";

import Draw from "./components/menu/Drawer";

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

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App" id="top">
            <FloatingActionButton style={style}>
              <Link
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <AddIcon />
              </Link>
            </FloatingActionButton>
            <Header />

            <About />
            <Events />
            <Footer />
          </div>
        </Route>
        <Route path="/menu">
          <Draw />
        </Route>
        <Route path="/people">
          <People />
        </Route>
      </Switch>
    </Router>
  );
}
