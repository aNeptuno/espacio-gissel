import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {useState } from 'react';

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
          <Navbar fixed="top" expand="lg" className={color ? 'navbar navbar-bg' : 'navbar navbar-dropdown-bg'}>
            <Container>
              <Navbar.Brand>
                <Nav.Link as={NavLink} to="/">
                  <img src={logoImg} alt="Espacio Gissel Logo" width="62px"/>
                </Nav.Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className={color ? '' : 'navbar-collapse-bg'}>
                <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/" className="first">Inicio</Nav.Link>
                  <Nav.Link as={NavLink} to="/Conoceme" >Conoceme</Nav.Link>
                  <NavDropdown title="Masajes" id="basic-nav-dropdown">
                    <NavDropdown.Item as={HashLink} to="/Masajes#Reflexologia">Reflexologia</NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Masajes#PiedrasCalientes">Piedras Calientes</NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Masajes#Descontracturantes">Descontracturantes</NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Masajes#Maderoterapia">Maderoterapia</NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Masajes#Terapeuticos">Terapéuticos</NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Masajes#Digitopuntura">Digitopuntura</NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Masajes#Esteticos">Estéticos con ultrasonido</NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Masajes#Reafirmantes">Reafirmantes con electrodos</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Terapias" id="basic-nav-dropdown">
                    <NavDropdown.Item as={HashLink} to="/Terapias/Aromaterapia">Aromaterapia</NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Terapias/Flores">Flores de Bach y Mediterráneo®</NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Terapias/Barras">Barras de Access®</NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Terapias/Frecuencias">Terapia de Frecuencias</NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Terapias/CartasNatales">Cartas Natales</NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Terapias/Numerologia">Cartas Numerológicas</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={HashLink} to="/#Testimonios">Testimonios</Nav.Link>
                  <Nav.Link as={HashLink}  to="/#Contacto" className="last">Contacto</Nav.Link> 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
  );
}

export default NavbarComponent;