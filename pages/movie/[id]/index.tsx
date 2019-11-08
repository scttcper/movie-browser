import React, { useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import Navbar from 'react-bootstrap/Navbar';
import fetch from 'isomorphic-unfetch';

import AppLayout from '../../../components/AppLayout';
import Clamp from '../../../components/Clamp';
import SmallBadge from '../../../components/SmallBadge';
import Link from 'next/link';

const Movie: NextComponentType<NextPageContext, { movie: any }, { movie: any }> = props => {
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
        <section className="mb-4">
          <div className="row mb-3">
            <div className="col-5 col-md-4 col-lg-3">
              <img alt="Movie Poster" className="rounded-lg" width="100%" src={props.movie.cover} />
            </div>

            <div className="col-7">
              <header className="" role="banner">
                <h1 className="font-weight-bolder">{props.movie.title}</h1>

                <ul className="list-inline text-muted small">
                  <li className="list-inline-item">1 Hour 21 Minutes</li>
                  <li className="list-inline-item inline-list__item--bulleted movie-header__list__item--release-date">
                    <time dateTime="1995-11-22T08:00:00.000Z" aria-label="1995">
                      1995
                    </time>
                  </li>
                  <li className="list-inline-item">
                    <SmallBadge>{props.movie.quality}</SmallBadge>
                  </li>
                </ul>

                <div className="d-none d-md-flex">
                  {/* large screen */}
                  <section>
                    <Clamp>{props.movie.description}</Clamp>
                  </section>
                </div>
              </header>
            </div>
          </div>
          {/* small screen */}
          <div className="row d-md-none">
            <div className="col-12">
              <section>
                <Clamp>{props.movie.description}</Clamp>
              </section>
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
};

Movie.getInitialProps = async function(context) {
  const { id } = context.query;

  const res = await fetch(`http://localhost:3000/api/movie/${id}`, {
    headers: {
      authorization: context.req.headers.authorization,
    },
  });
  // const errorCode = res.statusCode > 200 ? res.statusCode : false;
  const json = await res.json();
  return { movie: json };
};

export default Movie;
