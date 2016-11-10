import React from 'react';

const Intro = (props) => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img className="img-responsive" src={props.imgUrl} alt=""/>
                        <div className="intro-text">
                            <span className="name">{props.title}</span>
                            <hr className="star-light"/>
                            <span className="skills">{props.skills}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

Intro.propTypes = {
    title: React.PropTypes.string,
    skills: React.PropTypes.string,
    imgUrl: React.PropTypes.string
}

Intro.defaultProps = {
    title: 'Project Chickens',
    skills: 'Software Engineer & Information Strategist',
    imgUrl: 'img/profile.png'
}
export default Intro;