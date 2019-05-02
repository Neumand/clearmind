import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navigation = props => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/specialists">Get Help</Nav.Link>
          <Nav.Link href="/resources">Resources</Nav.Link>
          <NavDropdown title="Our Network" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/specialists">Specialists</NavDropdown.Item>
            <NavDropdown.Item href="/clinics">Clinics</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        {localStorage.getItem("jwt") ? (
          <Nav>
            <Navbar.Text>Welcome, {props.currentUser.firstName}!</Navbar.Text>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
