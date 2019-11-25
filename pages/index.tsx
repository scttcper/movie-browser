/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import fetch from 'isomorphic-unfetch';
import { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';

import { AppLayout } from '../components/AppLayout';

const Movies: NextComponentType<NextPageContext, { movies: any[] }, { movies: any[] }> = props => {
  return (
    <AppLayout>
      Recently Updated
      <ul>
        {props.movies.map(x => (
          <li key={x.id}>
            <Link href={`/movie/${String(x.id)}`}>
              <a>{x.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </AppLayout>
  );
};

Movies.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/movie');
  const json = await res.json();
  console.log('swag', json);
  return { movies: json };
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
