import React from 'react';

const Nav = (props) => {
    return (
        <nav id="mainNav" className={props.navClasses}>
            <div className="container">
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span> {props.navMiniName} <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="#page-top">{props.title}</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="hidden">
                            <a href="#page-top"></a>
                        </li>
                        {props.links.map((entry)=>{
                            return (
                                <li key={entry.name} className="page-scroll">
                                    <a href={"#"+entry.name.toLowerCase()}>{entry.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>

    )
};

Nav.propTypes = {
    title: React.PropTypes.string,
    links: React.PropTypes.array.isRequired,
    navClasses: React.PropTypes.string,
    navMiniName: React.PropTypes.string
}

Nav.defaultProps = {
    title: 'Project Chickens',
    navClasses: "navbar navbar-default navbar-fixed-top navbar-custom",
    navMiniName: 'Menu'
}

export default Nav;
