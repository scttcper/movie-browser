import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

const SiteNav: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <div className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link href="/">
          <a className="mx-auto">
            <Navbar.Brand className="font-weight-light">DRK-1</Navbar.Brand>
          </a>
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            style={{ width: '100%' }}
            className="d-flex justify-content-around font-weight-light"
          >
            <Link href="/movie/add">
              <a className="nav-link">Add Movie</a>
            </Link>
            <Link href="/movie">
              <a className="nav-link">Movies</a>
            </Link>
            <Link href="/search">
              <a className="nav-link">Search</a>
            </Link>
            <Link href="/Settings">
              <a className="nav-link">Settings</a>
            </Link>
            <Link href="/Status">
              <a className="nav-link">Status</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default SiteNav;
