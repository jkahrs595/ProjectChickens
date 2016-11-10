import React from 'react';

const PortfolioItem = (props) => {
    return(
        <div className="col-sm-4 portfolio-item">
            <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                <div className="caption">
                    <div className="caption-content">
                        <i className="fa fa-search-plus fa-3x"></i>
                    </div>
                </div>
                <img src={props.imgUrl} className="img-responsive" alt=""/>
            </a>
        </div>
    )
};

PortfolioItem.propTypes = {
    imgUrl: React.PropTypes.string
}

PortfolioItem.defaultProps = {
    imgUrl: 'img/portfolio/cabin.png'
}

export default PortfolioItem;