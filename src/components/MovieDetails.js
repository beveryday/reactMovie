import React from "react";
import CardHeader from "@material-ui/core/CardHeader";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Star from "../star.js"
import "../back.jpg";
import "../austin.png";

const useStyles = makeStyles(theme => ({
container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const clip = {
    title: "Back to the Future",
    src: require("../back.jpg"),
    releaseDate: "Release Date: July 3, 1985",
    description:
      "Marty McFly and Gang travel to the past and go back to the future.",
    width: 100,
    height: 100
  };
  const width = {
    width: "70%"
  };

  export default function Movie() {
    const classes = useStyles();
      return (
          <>
        <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={clip.title}
        subheader={clip.releaseDate}
      />
            <div className="parentDiv" style={classes}>
            <img style={width} src={clip.src} alt={clip.description} />
            <Star />
            </div>
        </>
      )
  }