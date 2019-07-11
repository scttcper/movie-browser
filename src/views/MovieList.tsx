import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { RouteComponentProps } from 'react-router';
import { Route, Link } from 'react-router-dom';
import Movie from './Movie';

import { movies } from '../services/movies';

const MovieList: React.FC<RouteComponentProps> = ({ match }) => {
  console.log(match);
  return (
    <main className="container mt-4">
      <div className="row">
        {movies.map(movie => (
          <div css={movieCard} key={movie.id} className="col-6 col-md-3 col-lg-2 col-xl-2 mb-3">
            <Link to={`${match.path}/${movie.id}`}>
            <img
              src={movie.cover}
              width="100%"
              className="rounded border img-fluid mb-1"
              alt="..."
            />
            <h5 className="card-title text-truncate my-0">{movie.title}</h5>
            <small className="">{movie.quality}</small>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

const Movies: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <React.Fragment>
      <Navbar className="border-bottom" expand="md" bg="white">
        <div className="container">
          <Navbar.Brand>Movies</Navbar.Brand>
        </div>
      </Navbar>
      <Route path={`${match.url}`} exact component={MovieList} />
      <Route path={`${match.url}/:id`} exact component={Movie} />
    </React.Fragment>
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
