import React from 'react';
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


const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg',
  height: 200,
  width:200
};

// Component class starts here:
class Owl extends React.Component {
  render() {
    return (
      <div className = "parentDiv">  
        <h1>{owl.title}</h1>
        <img alt={owl.title} src={owl.src} width={owl.width} height={owl.height} />
        <textarea className = "textArea"></textarea>
      </div>
    );
  }
};

export default Owl;
