import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  BrowserRouter,
  Routes, 
  Route,
  NavLink,
} from "react-router-dom";



function NavbarComponent() {

  return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Espacio Gissel</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" >Inicio</Nav.Link>
                <Nav.Link as={NavLink} to="/Conoceme" >Conoceme</Nav.Link>
                <Nav.Link as={NavLink} to="/NoMatch" >Masajes</Nav.Link>
                <Nav.Link as={NavLink} to="/NoMatch" >Terapias</Nav.Link>
                <Nav.Link as={NavLink} to="/NoMatch" >Testimonios</Nav.Link>
                <Nav.Link as={NavLink} to="/Contacto" >Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
}

export default NavbarComponent;