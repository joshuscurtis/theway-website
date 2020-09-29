import "./EventCard.css";

import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default function MediaCard(props) {
  var img =
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/09/20/istock-157528129.jpg?width=1368";
  if (props.img != null) {
    img = props.img;
  }
  return (
    <Card className="Card">
      <CardActionArea>
        <CardMedia className="Card__Image" image={img} title={props.title} />
        <CardContent className="Card__Content">
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="Card__Actions">
        <Typography variant="body2" color="textPrimary" component="p">
          {props.time}
        </Typography>
      </CardActions>
    </Card>
  );
}
