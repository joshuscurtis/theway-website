import React from "react";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Feed from "react-instagram-authless-feed";
import { SocialIcon } from "react-social-icons";

import "./Box.css";

export function Box(props) {
  return (
    <div className="Box__Container">
      <CardContent>
        <Typography variant="body2" component="p">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </div>
  );
}

export function Insta(props) {
  return (
    <div className="Insta__Container" variant="outlined">
      <Feed
        userName="the_way_dunstable"
        className="Insta"
        classNameLoading="Loading"
      />
    </div>
  );
}

export function News(props) {
  return (
    <div className="Box__Container">
      <div className="News">
        <Typography className="Box__Title" variant="h5" component="h5">
          {props.title}
        </Typography>
        <Typography className="content" variant="subtitle" component="p">
          {props.content}
        </Typography>
      </div>
      <div className="Box__Socials">
        <SocialIcon url="https://www.instagram.com/the_way_dunstable/" />
        <SocialIcon url="https://www.facebook.com/thewaydunstable/" />
        <SocialIcon url="http://youtube.com/" />
      </div>
    </div>
  );
}

export function OpeningTimes(props) {
  return (
    <div className="Box__Container">
      <div className="OpeningTimes">
        <Typography className="Box__Title" variant="h5" component="h5">
          {props.title}
        </Typography>
        <p>
          <b>Monday:</b> {props.mon}
          <br></br>
        </p>
        <p>
          <b>Tuesday</b>: {props.tue}
          <br></br>
        </p>
        <p>
          <b>Wednesday</b>: {props.wed}
          <br></br>
        </p>
        <p>
          <b>Thursday</b>: {props.thu}
          <br></br>
        </p>
        <p>
          <b>Friday</b>: {props.fri}
          <br></br>
        </p>
        <p>
          <b>Saturday</b>: {props.sat}
          <br></br>
        </p>
        <p>
          <b>Sunday</b>: {props.sun}
          <br></br>
        </p>
      </div>
      <CardActions></CardActions>
    </div>
  );
}
