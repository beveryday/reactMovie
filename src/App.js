import React from 'react';
import Card from '@material-ui/core/Card';
// import logo from './logo.svg';
import './App.css';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const clip = {
  title: 'Back to the Future',
  src: '14026976_f520.jpg',
  height: 200,
  width:200
};

// Component class starts here:
class Movie extends React.Component {
  render() {
    return (
      <Card className ="parentDiv"> 
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" >
            <img src="14026976_f520.jpg"/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={clip.title}
        subheader="Release Date: July 3, 1985"
      /> 
        <h1>{clip.title}</h1>
        <img alt={clip.title} src={clip.src} width={clip.width} height={clip.height} />
        
      </Card>
    );
  }
};

export default Movie;
