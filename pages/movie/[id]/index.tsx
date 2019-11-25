/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import fetch from 'isomorphic-unfetch';
import { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';

import { AppLayout } from '../../../components/AppLayout';
import { SiteBadge, Sites } from '../../../components/SiteBadge';
import { ImdbBadge } from '../../../components/ImdbBadge';
import { RtBadge } from '../../../components/RtBadge';
import { TmdbBadge } from '../../../components/TmdbBadge';

const Movies: NextComponentType<NextPageContext, { movie: any }, { movie: any }> = props => {
  console.log({ props });
  const movieLinks = props.movie.links.filter(x => x.site !== Sites.rottentomatoes);
  const rt = props.movie.links.find(x => x.site === Sites.rottentomatoes);

  return (
    <AppLayout>
      <div className="container">
        <div className="row my-5">
          <div className="col-12">
            <h2>{props.movie.original_title}</h2>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12">
            <h5>Links</h5>
          </div>
          <div className="col-md-4 my-1">
            <ImdbBadge />
          </div>
          <div className="col-md-4 my-1">
            <RtBadge />
          </div>
          <div className="col-md-4 my-1">
            <TmdbBadge />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h5>Watch Now</h5>
          </div>

          <div className="col-12">
            <div className="row">
              {movieLinks.map(link => (
                <div key={link.id} className="col-lg-4 col-md-6">
                  <SiteBadge link={link} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

Movies.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/movie/${id}`);
  const json = await res.json();
  return { movie: json };
};

export default Movies;
