import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
// import logo from './logo.svg';
import './App.css';
import Logo from './14026976_f520.jpg';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Star from './star.js';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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


export default function Movie() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed className ="parentDiv">
      <div
        avatar={<Avatar aria-label="recipe" src={Logo}></Avatar>}
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
      <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </div>
    </form>
      </Container>
    </React.Fragment>
  );
}
