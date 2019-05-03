import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
      <Link to="/" className="navbar-brand">
        Logo
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/specialists" className="nav-link">
            Get Help
          </Link>
          <Link to="/resources" className="nav-link">
            Resources
          </Link>
          <NavDropdown title="Our Network" id="collasible-nav-dropdown">
            <Link to="/specialists" className="dropdown-item">
              Specialists
            </Link>
            <Link to="/clinics" className="dropdown-item">
              Clinics
            </Link>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        {localStorage.getItem('jwt') ? (
          <Nav>
            <Navbar.Text>
              Welcome,{' '}
              <Link to="/profile">{localStorage.getItem('user name')}</Link>!
            </Navbar.Text>
            <Link to="/logout" className="nav-link">
              Logout
            </Link>
          </Nav>
        ) : (
          <Nav>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Navbar.Text>|</Navbar.Text>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
