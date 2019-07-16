import React from 'react';
import styled from '@emotion/styled';

const SmallBadgeSpan = styled.span`
  color: var(--white);
  background-color: var(--secondary);
  text-transform: uppercase;
  padding: 0.1rem;
`;

const SmallBadge: React.FC = props => {
  return <SmallBadgeSpan className="font-weight-bold small px-1 rounded">{props.children}</SmallBadgeSpan>;
};

export default SmallBadge;
