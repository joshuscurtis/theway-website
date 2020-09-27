import React from "react";

import "./styles.css";
import Main from "./Main";
import About from "./About";
import Events from "./Events";

export default function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Events />
      <About />
      <About />
      <Events />
    </div>
  );
}
