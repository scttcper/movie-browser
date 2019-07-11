import React from 'react';
import { RouteComponentProps } from 'react-router';

import Clamp from '../components/Clamp';
import SmallBadge from '../components/SmallBadge';
import { movies } from '../services/movies';

const Movie: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const movie = movies.find(n => n.id === +match.params.id);
  if (!movie) {
    throw new Error('Movie not found');
  }

  return (
    <React.Fragment>
      <main className="container mt-4">
        <section className="mb-4">
          <div className="row mb-3">
            <div className="col-5 col-md-4 col-lg-3">
              <img alt="Movie Poster" className="rounded-lg" width="100%" src={movie.cover} />
            </div>

            <div className="col-7">
              <header
                className=""
                role="banner"
              >
                <h1 className="font-weight-bolder">{movie.title}</h1>

                <ul className="list-inline text-muted small">
                  <li className="list-inline-item">100%</li>
                  <li className="list-inline-item">1 Hour 21 Minutes</li>
                  <li className="list-inline-item inline-list__item--bulleted movie-header__list__item--release-date">
                    <time dateTime="1995-11-22T08:00:00.000Z" aria-label="1995">
                      1995
                    </time>
                  </li>
                  <li className="list-inline-item">
                    <SmallBadge>{movie.quality}</SmallBadge>
                  </li>
                </ul>

                <div className="d-none d-md-flex">
                  {/* large screen */}
                  <section>
                    <Clamp>{movie.description}</Clamp>
                  </section>
                </div>
              </header>
            </div>
          </div>
          {/* small screen */}
          <div className="row d-md-none">
            <div className="col-12">
              <section>
                <Clamp>{movie.description}</Clamp>
              </section>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Movie;
