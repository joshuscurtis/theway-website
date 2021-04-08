import React from "react";
import "./About.css";
import "animate.js";
import { OpeningTimes, News, Insta } from "./Box";
import Typewriter from "typewriter-effect";

import ScrollAnimation from "react-animate-on-scroll";

export default function Pane() {
  const news = "Opening soon for takeaway drinks and cakes... ";
  return (
    <div id="about">
      <div className="People__Title__Container">
        {/* <h1 className="People__Title">ABOUT US</h1> */}
      </div>
      <div className="About__Main">
        <div className="About__row2">
          <div className="exc">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Our coffee is ")
                  .typeString(
                    "<strong><span style='color: #00204e;'>top quality</span></strong>"
                  )
                  .pauseFor(500)
                  .deleteChars(11)
                  .typeString(
                    "<strong><span style='color: #00204e;'>award winning</span></strong>"
                  )
                  .pauseFor(500)
                  .deleteChars(13)
                  .typeString(
                    "<strong><span style='color: #00204e;'>hand roasted</span></strong>"
                  )
                  .pauseFor(500)
                  .deleteChars(12)
                  .typeString(
                    "<strong><span style='color: #00204e;'>Fairtrade</span></strong>"
                  )
                  .pauseFor(500)
                  .callFunction(() => {
                    console.log(
                      "<strong><span style='color: #00204e;'>String typed out!"
                    );
                  })
                  .pauseFor(1000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </div>
        </div>
        {/* <div className="About__row2"> */}
        {/* <ScrollAnimation
            animateOnce={true}
            duration={1}
            animateIn="slideInLeft"
          >
            <Box title="" content={aboutUs} />
          </ScrollAnimation> */}
        {/* </div> */}
        <div className="About__row2">
          <ScrollAnimation
            animateOnce={true}
            duration={1}
            animateIn="slideInLeft"
          >
            <OpeningTimes
              title="Opening Times"
              mon="8:30am - 1:00pm"
              tue="8:30am - 1:00pm"
              wed="8:30am - 1:00pm"
              thu="8:30am - 1:00pm"
              fri="8:30am - 1:00pm"
              sat="8:30am - 1:00pm"
              sun="CLOSED"
            />
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            duration={1}
            animateIn="slideInRight"
          >
            <News url="https://christchurchdunstable.org.uk/wp-json/wp/v2/posts?include[]=470&include[]=7912" title="Latest Updates" content={news} />
          </ScrollAnimation>
        </div>

          <div className="About__row2">
          <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <ErrorBoundary>
            {/*<Insta title="" />*/}
            </ErrorBoundary>
          </ScrollAnimation>
        </div>
   
      </div>
    </div>
  );
}
