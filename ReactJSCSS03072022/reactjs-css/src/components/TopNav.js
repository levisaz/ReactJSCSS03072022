import React from 'react'
import '../styles/TopNav.css'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import ReactLogo from '../logo.svg'
const TopNav = () => {
  return (
    
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-5">
          <Container>
            
            <Navbar.Brand href="/ReactJSCSS03072022"><img src={ReactLogo} alt="React Logo" style={{width: '3rem', height:'3rem'}}/>&lt;LeviSazon /&gt;</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  
                <NavDropdown title="My Weekend" id="basic-nav-dropdown">
                  <Link className="nav-link" to="/saturday"><NavDropdown.Item href="/saturday">Saturday</NavDropdown.Item></Link>
                  <Link className="nav-link" to="/sunday"><NavDropdown.Item href="/sunday">Sunday</NavDropdown.Item></Link>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
      
      <Outlet/>
      </>
  )
}

export default TopNav