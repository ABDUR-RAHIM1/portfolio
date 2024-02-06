import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom" 

function Header() {
    return (
        <div className='wrapper bg-color text-white sticky-top py-2 border-b border-gray-200'>
            <header>
                <Navbar collapseOnSelect expand="lg">
                    <Link to="/">
                        <h3 className='text-2xl italic'>ABDUR-RAHIM</h3>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='ms-auto text-white'>
                            <Link to="/" className='link' as={Link} href="#deets">Home</Link>
                            <Link to="/about" className='link' as={Link} href="#deets">about</Link>
                            <Link to="/resume" className='link' as={Link} href="#deets">Resume</Link>
                            <Link to="/my-works" className='link' as={Link} href="#deets">My Works</Link>
                            <Link to="/contact" className='link' as={Link} href="#deets">Contact</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </div>
    )
}

export default Header