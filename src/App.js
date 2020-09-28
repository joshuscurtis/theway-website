import React from "react";

import "./styles.css";
import Header from "./Main";
import About from "./About";
import Events from "./Events";
import People from "./People";

import Divider from "@material-ui/core/Divider";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Divider className="divider" variant="middle" />
      
      <Events />
      <Divider className="divider" variant="middle" />
      <People />
      <Footer />
    </div>
  );
}
