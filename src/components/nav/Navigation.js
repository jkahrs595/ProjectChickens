import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Navigation = (props) => {
    return (
        <Navbar id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom" collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand className="navbar-brand">
                    <a href="#page-top">Project Chickens</a>
                </Navbar.Brand>
                <Navbar.Toggle className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"/>
            </Navbar.Header>
            <Navbar.Collapse id="bs-example-navbar-collapse-1">
                <Nav className="nav navbar-nav navbar-right">
                        <NavItem className="hidden" href="#page-top"/>
                        {props.links.map((entry, index)=>{
                            return (
                                <NavItem
                                    eventKey={index}
                                    key={entry.name}
                                    className="page-scroll"
                                    href={"#"+entry.name.toLowerCase()}>{entry.name}</NavItem>
                            )
                        })}

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
};

Navigation.propTypes = {
    title: React.PropTypes.string,
    links: React.PropTypes.array.isRequired,
    navClasses: React.PropTypes.string,
    navMiniName: React.PropTypes.string
}

Navigation.defaultProps = {
    title: 'Project Chickens',
    navClasses: "navbar navbar-default navbar-fixed-top navbar-custom",
    navMiniName: 'Menu'
}

export default Navigation;
