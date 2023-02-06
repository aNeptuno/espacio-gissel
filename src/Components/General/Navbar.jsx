import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {useState, useEffect } from 'react';

import { NavLink } from "react-router-dom"; 
import { HashLink } from 'react-router-hash-link';

import logoImg from "./logo-gissel-color.png";



function NavbarComponent() {

  //Change navcolor when scrolling
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
        <div className='container'>
          <Navbar fixed="top" expand="lg" className={color ? 'navbar navbar-bg' : 'navbar'}>
            <Container>
              <Navbar.Brand>
                <Nav.Link as={NavLink} to="/">
                  <img src={logoImg} alt="Espacio Gissel Logo" width="62px"/>
                </Nav.Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className={color ? '' : 'navbar-collapse-bg'}>
                <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
                  <Nav.Link as={NavLink} to="/Conoceme" >Conoceme</Nav.Link>
                  <Nav.Link as={NavLink} to="/Masajes" >Masajes</Nav.Link>
                  <Nav.Link as={NavLink} to="/Terapias" >Terapias</Nav.Link>
                  <Nav.Link as={HashLink} to="/#Testimonios" >Testimonios</Nav.Link>
                  <Nav.Link as={HashLink}  to="/#Contacto">Contacto</Nav.Link> 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
  );
}

export default NavbarComponent;