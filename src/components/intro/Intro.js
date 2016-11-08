import React from 'react';

const Intro = (props) => {
    return(
    <header>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <img className="img-responsive" src="img/profile.png" alt=""/>
                        <div className="intro-text">
                            <span className="name">Project Chickens</span>
                            <hr className="star-light"/>
                                <span className="skills">Software Engineer & Information Strategist</span>
                        </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Intro;