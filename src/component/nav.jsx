import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar expand="lg" variant="light" className="navbar-custom py-3" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-accent">MonPortfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="me-3">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/apropos" className="me-3">À propos</Nav.Link>
            <Nav.Link as={Link} to="/projets" className="me-3">Projets</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="btn-accent">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;