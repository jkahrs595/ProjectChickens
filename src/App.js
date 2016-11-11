import React from 'react';
import Navigation from './components/nav/Navigation';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navigation links={[Portfolio, About, Contact]}/>
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
