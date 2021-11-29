import React from 'react';
import { Container, Dropdown, Nav, Navbar, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
// import logo from "../../img/logo.png";
import file from '../../img/Farzana Sharmin Mou resume.pdf'
import './Menu.css';

const Menu = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                    {/* <img src={logo} alt="" width="70"/> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to="/home" className="items">
                    <li>Home</li>
                    </NavLink>
                    <NavLink to="/about" className="items">
                    <li>About Me</li>
                    </NavLink>
                    <NavLink to={file} target="_blank" download className="items">
                    <li>Download Resume</li>
                    </NavLink>
                    <NavLink to="/portfolio" className="items">
                    <li>Portfolio</li>
                    </NavLink>
                    <NavLink to="/contact" className="items">
                    <li>Contact</li>
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;