import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import RouterURL from '../RouterURL/RouterURL';
import Footer from '../Footer/Footer';


class App extends Component {
  render() {
    return (
       <div>
          <Router>
              <RouterURL></RouterURL>
          </Router>
          <Footer></Footer>
          <a href="#home" id="toTop" className="scroll" style={{display: 'block'}}> <span id="toTopHover" style={{opacity: 1}}> </span></a>
       </div> 
      
    );
  }
}

export default App;
