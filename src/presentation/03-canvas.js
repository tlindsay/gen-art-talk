import React from 'react';
import styled from '@emotion/styled';
import {
  Slide,
  Heading,
  Code,
  CodePane,
  Layout,
  Fit,
  Fill
} from 'spectacle';

const StyledCanvas = styled.canvas`
  border: 1px solid black;
`;

export default class CanvasSlide extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    let canvas = this.canvasRef.current;
    let ctx = canvas.getContext('2d');
    let { height, width } = canvas;

    ctx.fillStyle = '#85a';
    ctx.fillRect(
      20,
      20,
      width-40,
      height-40
    );
  }

  render() {
    let code = this
      .componentDidUpdate
      .toString()
      .split('\n')
      .slice(1, -1)
      .map(s => s.replace(/^\s{6}/, ''))
      .join('\n');

    return (
      <Slide {...this.props} align="center top">
        <Heading size={2} textSize="2.5em" margin="0 auto 1em">
          How does the <Code>{'<canvas>'}</Code> work?
        </Heading>
        <Layout>
          <Fit>
            <StyledCanvas
              height="300"
              ref={this.canvasRef}
              width="300"
            >
            </StyledCanvas>
          </Fit>
          <Fill>
            <CodePane
              transition={[]}
              lang="js"
              padding="0 0 0 1em"
              source={code}
              textSize="1em"
              theme="light"
            />
          </Fill>
        </Layout>
      </Slide>
    )
  }
}
