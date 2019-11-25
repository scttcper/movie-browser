/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

export const TmdbBadge: React.FC = props => {
  return (
    <div css={TmdbBadgeStyles} className="shadow-sm rounded">
      <a href="https://www.imdb.com/title/tt0266543/" target="_blank" rel="noopener noreferrer">
        <div className="inner p-3 d-flex flex-row justify-content-between">
          <h4 className="mb-0 font-weight-bold d-inline-block">TMDB</h4>
          <div className="d-inline-block">7.4</div>
        </div>
      </a>
    </div>
  );
};

const TmdbBadgeStyles = css`
  background-color: #00D277;
  transition: all 0.3s ease-in;
  border: #00AD86 1px solid;
  a {
    color: #000000;
    text-decoration: none;

  }
  :hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    filter: brightness(108%);
  }
`;
