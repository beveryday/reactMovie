import React from 'react';
import Container from '@material-ui/core/Container';
// import logo from './logo.svg';
import './App.css';
import Star from './star.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const clip = {
  title: 'Back to the Future',
  src: './img/14026976_f520.jpg',
  height: 200,
  width:200
};
const width = {
  width: "100%",
}

export default function Movie() {

  return (
    <Container fixed className="parentDiv" style={useStyles}>
    <h1>{clip.title}</h1>
    <img style={width} src={clip.logo} alt={clip.description}></img>
    <p>Release Date: July 3, 1985</p>
   <Star />
  </Container>
  );
}
