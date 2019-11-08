import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Link from 'next/link';

import AppLayout from '../../components/AppLayout';

const MovieIndex: React.FC = props => {
  return (
    <AppLayout>
      {/* <Navbar className="border-bottom" expand="md" bg="white">
        <div className="container">
          <Link href="/movie">
            <a>
              <Navbar.Brand>Search</Navbar.Brand>
            </a>
          </Link>
        </div>
      </Navbar> */}
      <main className="container mt-4">
        <div className="row">
          <div className="col-12">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default MovieIndex;
