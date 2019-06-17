import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export interface ClampProps {
  length?: string;
}

export interface ClampState {
  collapsed: boolean;
}

/**
 * collapse some text over a length
 */
export default class Clamp extends React.Component<ClampProps, ClampState> {
  divElement?: HTMLDivElement;

  constructor(props: ClampProps) {
    super(props);

    this.state = { collapsed: false };
  }
  expand = () => {
    this.setState(state => ({ collapsed: false }));
  };
  componentDidMount() {
    if (!this.divElement) {
      return;
    }
    const height = this.divElement.clientHeight;
    console.log({height})
    if (height >= 130) {
      this.setState(state => ({ collapsed: true }));
    }
  }
  render() {
    let fade = css``;
    if (this.state.collapsed) {
      fade = collapsed;
    }
    return (
      <ContainerDiv>
        <div ref={(divElement: HTMLDivElement) => this.divElement = divElement}
          css={css`${fade}`}
        >
          <p>{this.props.children}</p>
        </div>
        {this.state.collapsed && <MoreButton aria-hidden="true" onClick={this.expand} className="btn btn-sm btn-link p-0">
          more
        </MoreButton>}
      </ContainerDiv>
    );
  }
}

const ContainerDiv = styled.div`
  position: relative;
  z-index: 1;
`;

const ClampDiv = styled.div`
  word-break: break-word;
`;

const collapsed = css`
  height: 126px;
  mask: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0px,
      rgba(0, 0, 0, 0) 18.0001px,
      rgb(0, 0, 0) 18.0001px
    ),
    linear-gradient(
      270deg,
      rgba(0, 0, 0, 0) 0px,
      rgba(0, 0, 0, 0) 32.8px,
      rgb(0, 0, 0) 68.8002px
    );
`;

const MoreButton = styled.button`
  position: absolute;
  bottom: 0;
  /* float: initial; */
  right: 0;
  z-index: 1;
`;
