import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import example from '../examples/three.txt';

export default class ThreeCodeSlide extends React.Component {
  render() {
    return (
      <CodeSlide
        {...this.props}
        align="center top"
        transition={[]}
        lang="js"
        code={example}
        ranges={[
          { loc: [0, 3] },
          { loc: [4, 11] },
          { loc: [12, 17] },
          { loc: [18, 23] },
          { loc: [24, 37] }
        ]}
      />
    )
  }
}
