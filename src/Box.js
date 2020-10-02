import React from "react";

import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Feed from "react-instagram-authless-feed";
import { SocialIcon } from "react-social-icons";

import "./Box.css";

export function Box(props) {
  return (
    <Card className="Box__Container" variant="outlined">
      <CardContent>
        <Typography className="Box__Title" variant="h4" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
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
    <Card className="Box__Container" variant="outlined">
      <CardContent className="News">
        <Typography className="Box__Title" variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions className="Box__Socials">
        <SocialIcon url="https://www.instagram.com/the_way_dunstable/" />
        <SocialIcon url="https://www.facebook.com/thewaydunstable/" />
        <SocialIcon url="http://youtube.com/" />
      </CardActions>
    </Card>
  );
}

export function OpeningTimes(props) {
  return (
    <Card id="openingtimes" className="Box__Container" variant="outlined">
      <CardContent className="OpeningTimes">
        <Typography className="Box__Title" variant="h5" component="h2">
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
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
