import AppLayout from '../components/AppLayout';

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Link from 'next/link';

const Movies: React.FC = () => {
  return (
    <AppLayout>
      <Navbar className="border-bottom" expand="md" bg="white">
        <div className="container">
          <Navbar.Brand>Movies</Navbar.Brand>
        </div>
      </Navbar>
      Hello
    </AppLayout>
  );
};

export default Movies;

const movieCard = css`
  :hover {
    text-decoration: underline;
  }
  a {
    color: black;
  }
`;
