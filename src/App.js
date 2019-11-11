import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './first.js';
// import logo from './logo.svg';
import './App.css';

export default function MovieProject() {
ReactDOM.render(
  <Movie></Movie>, document.getElementById('root')
);
}