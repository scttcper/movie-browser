import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const SiteNav: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <div className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link to="/" className="mx-auto">
          <Navbar.Brand className="font-weight-light">DRK-1</Navbar.Brand>
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            style={{ width: '100%' }}
            className="d-flex justify-content-around font-weight-light"
          >
            <Link className="nav-link" to="/add">
              Add Movie
            </Link>
            <Link className="nav-link" to="/movie">
              Movies
            </Link>
            <Link className="nav-link" to="/search">
              Search
            </Link>
            <Link className="nav-link" to="/Settings">
              Settings
            </Link>
            <Link className="nav-link" to="/Status">
              Status
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default SiteNav;
