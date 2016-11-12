import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Navigation = (props) => {
    return (
        <Navbar className="navbar-custom" fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#page-top">Project Chickens</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav className="nav navbar-nav navbar-right">
                    <NavItem className="hidden" href="#page-top"/>
                    {
                        props.links.map((entry, index)=> {
                            return (
                                <NavItem
                                    eventKey={index}
                                    key={entry.name}
                                    className="page-scroll"
                                    href={"#" + entry.name.toLowerCase()}>{entry.name}</NavItem>
                            )
                        })
                    }
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
