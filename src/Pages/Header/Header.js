import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { faAddressBook, faBlog, faHome, faTasks } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="back-ground sticky-top">
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <h1 className="text-light bold items"> <span className="">SARMIN AKTER DIPTY</span></h1>

                        <span className='text-light'>Web Developer</span> */}


                    </Nav>
                    <Nav>
                        <NavLink to='/home' className="items navlinks"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
                        <NavLink to='/projects' className="items navlinks"><FontAwesomeIcon icon={faTasks} /> Projects</NavLink>
                        <NavLink to="/about" className="items navlinks"><FontAwesomeIcon icon={faAddressBook} /> About</NavLink>
                        <NavLink to="/blogs" className="items navlinks"><FontAwesomeIcon icon={faBlog} /> Blogs</NavLink>
                        {/* <NavLink eventKey={2} to="/login" className="items">
                            <FontAwesomeIcon icon={faSign} />Login
                        </NavLink> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;