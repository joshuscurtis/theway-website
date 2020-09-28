import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./Box.css";

export function Box(props) {
  return (
    <Card className="Box__Container" variant="outlined">
      <CardContent>
        <Typography className="Box__Title" variant="h5" component="h2">
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
      <CardActions></CardActions>
    </Card>
  );
}

export function OpeningTimes(props) {
  return (
    <Card className="Box__Container" variant="outlined">
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
