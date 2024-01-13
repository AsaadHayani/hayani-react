import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand to="/" as={NavLink} className="fs-2">
          Hayani
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-6">
            <Nav.Link to="/posts" as={NavLink}>
              Posts
            </Nav.Link>
            <Nav.Link to="/gallery" as={NavLink}>
              Gallery
            </Nav.Link>
            <Nav.Link to="/todo" as={NavLink}>
              ToDo
            </Nav.Link>
            <Nav.Link to="/ecommerce" as={NavLink}>
              Ecommerce
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
