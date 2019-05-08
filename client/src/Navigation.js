import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Link to="/" className="navbar-brand">
        <img
          src="/nav-logo.png"
          style={{ width: `2em`, height: `auto` }}
          alt="logo"
        />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/specialists" className="nav-link">
            Book an Appointment
          </Link>
          <Link to="/resources" className="nav-link">
            Resources
          </Link>
          <NavDropdown title="Our Network" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/specialists" className="dropdown-item">
                Specialists
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/clinics" className="dropdown-item">
                Clinics
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {localStorage.getItem('jwt') ? (
          <Nav>
            <Navbar.Text>Signed in as: &nbsp;</Navbar.Text>
            <Navbar.Text style={{ color: `white` }}>
              {localStorage.getItem('user name')}&nbsp;&nbsp;
            </Navbar.Text>

            <Link to="/profile" className="nav-link">
              Appointments
            </Link>

            <Link to="/logout" className="nav-link">
              Logout
            </Link>
          </Nav>
        ) : (
          <Nav>
            <Link to="/login" className="nav-link" style={{ color: `white` }}>
              Login
            </Link>
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
