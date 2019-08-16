import React from 'react';

import { Slide, Heading } from 'spectacle';

export default class Intro extends React.Component {
  render() {
    return (
      <Slide {...this.props}>
        <Heading>Slide 01: Intro</Heading>
      </Slide>
    )
  }
}
