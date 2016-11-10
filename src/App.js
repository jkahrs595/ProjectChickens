import React from 'react';
import Nav from './components/nav/Nav';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import PortfolioModal from './components/portfolioModal/PortfolioModal';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                <Intro/>
                <Portfolio/>
                <PortfolioModal hidden="false" title=""/>
                <About/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default App;
