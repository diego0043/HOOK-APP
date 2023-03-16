import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
  return (
    <>
      <Navbar className="mb-2" bg="white" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav
            className="me-auto my-2 my-lg-0 scroll-my"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link ">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link ">
              About
            </NavLink>
            <NavLink to="/login" className="nav-link ">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="d-lg-block d-none Navbar.Brand mx-4">
        <NavLink to="/" className="nav-link">
               <span className="fs-3 text-primary fw-bold">Die</span>
               <span className="fs-3 fw-bold">go</span>
            </NavLink>
        </div>
    </Navbar>
    </>
  );
};
