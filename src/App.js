import React from 'react';
import Card from '@material-ui/core/Card';
// import logo from './logo.svg';
import './App.css';
import clsx from 'clsx';
import Logo from './14026976_f520.jpg';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Star from './star.js';
const clip = {
  title: 'Back to the Future',
  src: './img/14026976_f520.jpg',
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
          <Avatar aria-label="recipe" src={Logo}>
              
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
        <img alt={clip.title} src={Logo} width={clip.width} height={clip.height} />
       <Star />
      </Card>
    );
  }
};

export default Movie;
