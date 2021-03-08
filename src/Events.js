import React from "react";
import "./Events.css";
import EventCard from "./EventCard";
import { BoxWithFetch } from "./Box";
//const eventData = require('./data/events.json');
import ScrollAnimation from "react-animate-on-scroll";

export default function Pane() {
  const patchwork =
    "Whether you’re a master tailor, a skilled-seamstress, or you simply wouldn’t know the eye from the point; Patchwork & Quilting has something for every level of skill. Over this period, the group will be focusing on hand-stitching technique which will be accessible people of any experience. Join us in Christ Church Dunstable’s Foyer on the 1st and 3rd Monday of the month between 10am – 12:30pm and learn fresh skills while forging new friends. Click here to find out more.";
  const bookclub =
    "From Asimov to Hemmingway, the fictional to the factual, the tear-jerkers to the comedies, Book club enjoys reading old favourites, modern classics, and the yet to be acknowledged! Book Club evenings are filled with lively discussion and the club is a great way to expand your range as the group dips into a wide variety of styles, authors, and genres. The Book Club meets online on the 2nd Wednesday of each month and everyone is welcome. Click here to find out more.";
  const art =
    "Portraits, landscapes, seascapes escapes. Whether it’ll be the first time you’ve putting pencil to paper, or you’ve just lacquered your latest masterpiece, ‘Art’ is a group made for you. Each artist coming to art with a different style and with a different level of experience. We have sketchers, we have those doing watercolours, we have acrylic painters, all are welcome. Come along on a Tuesday morning between 10am - 12 noon and get creative with Art. Click here to find out more.";
  const knit =
    "Knit & Natter is warm group full of fun, laughter, chatting, and occasionally some knitting gets done. This group is home to over 40 knitters and crochet-ers ranging from beginner to expert. We have various seasonal projects, as well as being able to knit many items given the local NICU ward at the L&D hospital. We now run two sessions. Join us on Fridays between 9:30am – 11am or 11:30am – 1pm; if possible, let us know which. Click here to find out more.";
  const wed =
    "Christ Church Dunstable has children’s activities on a Wednesday evening, so on Wednesday evening we keep the Coffee House open til 9pm. This is us opportunity to run various activities. On these evenings we run quizzes, puddings nights, music nights and more. All are welcome to come in and enjoy the excellent coffee and cakes that we have to offer. These activities are run in-line with current Covid guidance. More information can be found in the Way or by clicking here.";
  return (
    <div className="Events__Container" id="events">
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <div className="Events__header">
          <div className="Events__Title__Container" id="events">
            <div className="title__left"> </div>{" "}
            <h1 className="Events__Title"> OUR EVENTS </h1>{" "}
            <div className="title__right"> </div>{" "}
          </div>{" "}
          <div className="Events__intro__alert">
            <BoxWithFetch url="https://christchurchdunstable.org.uk/wp-json/wp/v2/posts?include[]=470&include[]=8913" />{" "}
          </div>{" "}
          <div className="Events__intro">
            <BoxWithFetch url="https://christchurchdunstable.org.uk/wp-json/wp/v2/posts?include[]=470&include[]=8910" />{" "}
          </div>{" "}
        </div>{" "}
      </ScrollAnimation>{" "}
      <div className="Events__Main">
        <EventCard
          img="https://www.christchurchdunstable.org.uk/wp-content/uploads/Ministry-Posters-Book-Club.jpg"
          title="Book Club"
          text={bookclub}
          time="2nd Wednesday of the month – 7:30pm."
        />
        <EventCard
          img="https://www.christchurchdunstable.org.uk/theway/images/min//Ministry-Posters-Patchwork-Quilting.webp"
          title="Patch Work & Quilting"
          text={patchwork}
          time="1 st &amp; 3 rd Monday of the month. 10am-12:30pm"
        />
        <EventCard
          img="https://www.christchurchdunstable.org.uk/theway/images/min/Ministry-Posters-Art.webp"
          title="Art"
          text={art}
          time=" Tuesdays – 10am-12pm – During term time."
        />
        <EventCard
          img="https://www.christchurchdunstable.org.uk/wp-content/uploads/Ministry-Posters-Knit-Natter.jpg"
          title="Knit & Natter"
          text={knit}
          time="Fridays – 10am-12pm – During term time."
        />
        <EventCard
          img="https://www.christchurchdunstable.org.uk/wp-content/uploads/Coffee-Shop.jpg"
          title="Wednesday Evenings"
          text={wed}
          time="Wednesday evenings, til 9pm."
        />
      </div>{" "}
    </div>
  );
}
