import React from 'react';
import Card from '@material-ui/core/Card';
// import logo from './logo.svg';
import './App.css';



const clip = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg',
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
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> 
        <h1>{clip.title}</h1>
        <img alt={clip.title} src={clip.src} width={clip.width} height={clip.height} />
        <textarea className = "textArea"></textarea>
      </Card>
    );
  }
};

export default Movie;
