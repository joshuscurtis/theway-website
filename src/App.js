import React from "react";

import "./styles.css";
import Header from "./Main";
import About from "./About";
import Events from "./Events";
import People from "./People";


import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <About />      
      <Events />
      <People />
      <Footer />
    </div>
  );
}
