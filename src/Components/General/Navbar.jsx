import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {useState, useEffect } from 'react';

import { NavLink } from "react-router-dom";

import logoImg from "./logo-gissel-color.png";

function NavbarComponent() {

  /* const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    const handleScroll = () => {
      setSticky(window.scrollY > 200)
    }
    window.addEventListener('scroll',handleScroll)
    return () => window.removeEventListener('scroll',handleScroll);
  }) */

  return (
        <div className='container'>
          <Navbar fixed="top" expand="lg">
            <Container>
              <Navbar.Brand>
                <Nav.Link as={NavLink} to="/">
                  <img src={logoImg} alt="Espacio Gissel Logo" width="62px"/>
                </Nav.Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
                  <Nav.Link as={NavLink} to="/Conoceme" >Conoceme</Nav.Link>
                  <Nav.Link as={NavLink} to="/NoMatch" >Masajes</Nav.Link>
                  <Nav.Link as={NavLink} to="/NoMatch" >Terapias</Nav.Link>
                  <Nav.Link as={NavLink} to="/NoMatch" >Testimonios</Nav.Link>
                  <Nav.Link as={NavLink} to="/Contacto" >Contacto</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
  );
}

export default NavbarComponent;