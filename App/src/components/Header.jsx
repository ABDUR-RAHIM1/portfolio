import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import logo from "../images/logo.png"

function Header() {
    return (
        <div className='wrapper bg-color text-white sticky-top py-2 border-b border-gray-200'>
            <header>
                <Navbar collapseOnSelect expand="lg">
                    <h3 className='text-2xl italic'>ABDUR-RAHIM</h3>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='ms-auto text-white'>
                            <Nav.Link className='link' as={Link} href="#deets">Home</Nav.Link>
                            <Nav.Link className='link' as={Link} href="#deets">about</Nav.Link>
                            <Nav.Link className='link' as={Link} href="#deets">Resume</Nav.Link>
                            <Nav.Link className='link' as={Link} href="#deets">My Works</Nav.Link>
                            <Nav.Link className='link' as={Link} href="#deets">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </div>
    )
}

export default Header