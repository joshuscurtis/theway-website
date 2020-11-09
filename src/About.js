import React from "react";
import "./About.css";
import "animate.js";
import { Box, OpeningTimes, News, Insta } from "./Box";
import Typewriter from "typewriter-effect";

import ScrollAnimation from "react-animate-on-scroll";
import Carousel from "nuka-carousel";

export default function Pane() {
  const aboutUs =
    "The Way Coffee House is our newly restored 18th century coffee house, situated on West Street and the ideal place to meet friends, relax on your own or pick up a drink to take away.  Our friendly team serve fresh brewed coffee to suit all styles. In addition to coffee we have quality teas, cold drinks, Zuma hot chocolate to satisfy any chocaholic, scrummy cakes and light refreshments";
  const news = "Now servering Pancakes! ";

  return (
    <div id="about">
      <div className="People__Title__Container">
        <h1 className="People__Title">ABOUT US</h1>
      </div>
      <div className="About__Main">
        <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeIn">
          <div className="About__Slide">
            <Carousel autoplay autoplayInterval={3000}>
              <img
                alt=""
                src="https://www.christchurchdunstable.org.uk/wp-content/uploads/Coffee-Shop.jpg"
              />
              <img
                alt=""
                src="https://www.christchurchdunstable.org.uk/wp-content/uploads/Coffee-Shop.jpg"
              />
              <img
                alt=""
                src="https://www.christchurchdunstable.org.uk/wp-content/uploads/Coffee-Shop.jpg"
              />
            </Carousel>
          </div>
        </ScrollAnimation>

        <div className="About__row2">
          <ScrollAnimation
            animateOnce={true}
            duration={1}
            animateIn="slideInLeft"
          >
            <Box title="" content={aboutUs} />
          </ScrollAnimation>

          <ScrollAnimation
            animateOnce={true}
            duration={1}
            animateIn="slideInRight"
          >
            <OpeningTimes
              title="Opening Times"
              mon="08:30 - 15:00"
              tue="08:30 - 15:00"
              wed="08:30 - 15:00"
              thu="08:30 - 15:00"
              fri="08:30 - 15:00"
              sat="08:30 - 15:00"
              sun="CLOSED"
            />
          </ScrollAnimation>
        </div>
        <div className="About__row2">
          <ScrollAnimation
            animateOnce={true}
            duration={1}
            animateIn="slideInUp"
          >
            <News title="Latest Updates" content={news} />
          </ScrollAnimation>
        </div>
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
                  .pauseFor(300)
                  .deleteChars(13)
                  .typeString(
                    "<strong><span style='color: #00204e;'>hand roasted</span></strong>"
                  )
                  .pauseFor(300)
                  .deleteChars(12)
                  .typeString(
                    "<strong><span style='color: #00204e;'>Fairtrade</span></strong>"
                  )
                  .pauseFor(300)
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
        <div className="About__row2">
          <ScrollAnimation animateOnce={true} animateIn="fadeIn">
            <Insta title="" />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
