import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import DirectURL from '../DirectURL/DirectURL';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <DirectURL />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
