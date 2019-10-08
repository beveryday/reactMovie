import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

// import logo from './logo.svg';
import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//       </header>
//     </div>
//   );
// }


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
        <h1>{clip.title}</h1>
        <img alt={clip.title} src={clip.src} width={clip.width} height={clip.height} />
        <textarea className = "textArea"></textarea>
      </Card>
    );
  }
};

export default Movie;
