import React from 'react';
import {
  Slide,
  Heading
} from 'spectacle';

import styled from '@emotion/styled';

import shader from '../assets/shader-example.mp4';
import cubes from '../assets/example.mp4';

let StyledVideo = styled.video`
  margin: 0 2em;
`

export default class ExamplesSlide extends React.Component {

  render() {

    return (
      <Slide {...this.props} align="center top">
        <Heading size={2} textSize="2.5em" margin="0 auto 1em">
          What can we do with it?
        </Heading>
        <StyledVideo
          autoplay
          controls
          loop="true"
          playsinline="true"
          preload="auto"
          width="450"
          src={shader}
        >
        </StyledVideo>
        <StyledVideo
          autoplay
          controls
          loop="true"
          playsinline="true"
          preload="auto"
          width="450"
          src={cubes}
        >
        </StyledVideo>
      </Slide>
    )
  }
}
