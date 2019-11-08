import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Link from 'next/link';
import { NextComponentType, NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';

import AppLayout from '../../components/AppLayout';

const MovieIndex: NextComponentType<
  NextPageContext,
  { movies: any[] },
  { movies: any[] }
> = props => {
  return (
    <AppLayout>
      <Navbar className="border-bottom" expand="md" bg="white">
        <div className="container">
          <Link href="/movie">
            <a>
              <Navbar.Brand>Movies</Navbar.Brand>
            </a>
          </Link>
        </div>
      </Navbar>
      <main className="container mt-4">
        <div className="row">
          {props.movies.map(movie => (
            <div css={movieCard} key={movie.id} className="col-6 col-md-3 col-lg-2 col-xl-2 mb-3">
              <Link href="/movie/[movieId]" as={`/movie/${movie.id}`}>
                <a>
                  <img
                    src={movie.cover}
                    width="100%"
                    className="rounded border img-fluid mb-1"
                    alt="..."
                  />
                  <h5 className="card-title text-truncate my-0">{movie.title}</h5>
                  <small className="">{movie.quality}</small>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </AppLayout>
  );
};

MovieIndex.getInitialProps = async function({ req }) {
  const res = await fetch(`http://localhost:3000/api/movie`, {
    headers: {
      authorization: req.headers.authorization,
    },
  });
  // const errorCode = res.statusCode > 200 ? res.statusCode : false;
  const json = await res.json();
  console.log(json);
  return { movies: json };
};

export default MovieIndex;

const movieCard = css`
  :hover {
    text-decoration: underline;
  }
  a {
    color: black;
  }
`;
