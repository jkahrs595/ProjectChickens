import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <Intro/>
          <Portfolio/>
          <About/>
          <Contact/>
          <Footer/>
      </div>
    );
  }
}

export default App;
