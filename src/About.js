import React from "react";
import "./About.css";
import "animate.js";
import { OpeningTimes, News, Insta } from "./Box";
import Typewriter from "typewriter-effect";

import ScrollAnimation from "react-animate-on-scroll";

export default function Pane() {
  // const aboutUs =
  //   "The Way Coffee House is our newly restored 18th century coffee house, situated on West Street and the ideal place to meet friends, relax on your own or pick up a drink to take away.  Our friendly team serve fresh brewed coffee to suit all styles. In addition to coffee we have quality teas, cold drinks, Zuma hot chocolate to satisfy any chocaholic, scrummy cakes and light refreshments";
  const news = "Now open soon for drinks, food and cakes... ";

  return (
    <div id="about">
      <div className="People__Title__Container">
        {/* <h1 className="People__Title">ABOUT US</h1> */}
      </div>
      <div className="About__Main">
        {/* <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeIn">
          <div className="About__Slide">
            <Carousel autoplay autoplayInterval={3000}>
              <img
                alt=""
                src="http://www.christchurchdunstable.org.uk/theway/images/raw/DSC02119.JPG"
              />
              <img
                alt=""
                src="http://www.christchurchdunstable.org.uk/theway/images/raw/DSC00689.JPG"
              />
              <img
                alt=""
                src="http://www.christchurchdunstable.org.uk/theway/images/raw/DSC00420.JPG"
              />
            </Carousel>
          </div>
        </ScrollAnimation> */}
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
              mon="9:00am - 3:00pm"
              tue="9:00am - 3:00pm"
              wed="9:00am - 3:00pm"
              thu="9:00am - 3:00pm"
              fri="9:00am - 3:00pm"
              sat="9:00am - 3:00pm"
              sun="CLOSED"
            />
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            duration={1}
            animateIn="slideInRight"
          >
            <News title="Latest Updates" content={news} />
          </ScrollAnimation>
        </div>

        <div className="About__row2">
          <ScrollAnimation animateOnce={true} animateIn="fadeIn">
            <Insta title="" />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
