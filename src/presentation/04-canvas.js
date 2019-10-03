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

import funcToText from '../utils/func-to-text';

const StyledCanvas = styled.canvas`
  border: 1px solid black;
`;

export default class CanvasSlide extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = { angle: 0 };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentDidUpdate() {
    let canvas = this.canvasRef.current;
    let ctx = canvas.getContext('2d');
    let { height, width } = canvas;
    let { angle } = this.state;

    ctx.save();
    ctx.fillStyle = '#85a';
    ctx.clearRect(0, 0, width, height);
    ctx.translate(width / 2, height / 2);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);
    ctx.restore();
  }

  updateAnimationState() {
    this.setState(prevState => ({ angle: prevState.angle + 1 }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    let code = funcToText(this.componentDidUpdate, 2);

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
