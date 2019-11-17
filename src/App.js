import React from "react";
// import logo from './logo.svg';
import "./App.css";
import MovieDetails from "./components/MovieDetails";
import AppBar from "./components/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StarContainer from "./containers/starContainer";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
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



export default function Movie() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <AppBar/>
    <Card className={classes.card}>
      <MovieDetails/>
      <StarContainer/>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Back to the Future is a 1985 American science fiction film directed
            by Robert Zemeckis and written by Zemeckis and Bob Gale. It stars
            Michael J. Fox as teenager Marty McFly, who accidentally travels
            back in time from 1985 to 1955, where he meets his future parents
            and becomes his mother's romantic interest. Christopher Lloyd
            portrays the eccentric scientist Dr. Emmett "Doc" Brown, inventor of
            the time-traveling DeLorean, who helps Marty repair history and
            return to 1985. The cast also includes Lea Thompson as Marty's
            mother Lorraine, Crispin Glover as his father George, and Thomas F.
            Wilson as Biff Tannen, Marty and George's arch-nemesis.
          </Typography>
          <Typography paragraph>
            Zemeckis and Gale wrote the script after Gale wondered whether he
            would have befriended his father if they had attended school
            together. Film studios rejected it until the financial success of
            Zemeckis' Romancing the Stone. Zemeckis approached Steven Spielberg,
            who agreed to produce the project at Amblin Entertainment, with
            Universal Pictures as distributor. Fox was the first choice to play
            Marty, but he was busy filming his television series Family Ties,
            and Eric Stoltz was cast; after the filmmakers decided he was wrong
            for the role, a deal was struck to allow Fox to film Back to the
            Future without interrupting his television schedule.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </>
  );
}
