import React from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = (props) => {
    return (
        <section id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>{props.title}</h2>
                        <hr className="star-primary"/>
                    </div>
                </div>
                <div className="row">
                    <PortfolioItem/>
                    <PortfolioItem imgUrl="img/portfolio/cake.png"/>
                    <PortfolioItem imgUrl="img/portfolio/circus.png"/>
                    <PortfolioItem imgUrl="img/portfolio/game.png"/>
                    <PortfolioItem imgUrl="img/portfolio/safe.png"/>
                    <PortfolioItem imgUrl="img/portfolio/submarine.png"/>
                </div>
            </div>
        </section>
    );
};

Portfolio.propTypes = {
    title: React.PropTypes.string
};

Portfolio.defaultProps = {
    title: 'Portfolio'
};
export default Portfolio;