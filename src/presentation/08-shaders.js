import React from 'react';
import {
  Slide,
  Heading,
  List,
  ListItem,
  Layout,
  Fill,
  Image,
  CodePane
} from 'spectacle';
import { stripIndent } from 'common-tags';

import Gradient from '../assets/gradient.png';

const shader = stripIndent`
  varying vec2 vUv;

  void main() {
    gl_FragColor = vec4(vec3(vUv.x), 1.0);
    // OR               RED    GREEN  BLUE   ALPHA
    gl_FragColor = vec4(vUv.x, vUv.x, vUv.x, 1.0);
  }
`;

export default class ShaderSlide extends React.Component {
  render() {
    return (
      <Slide {...this.props} align="center top">
        <Heading size={2} margin="0 auto 1em">Shaders</Heading>
        <List>
          <ListItem>Fragment Shaders and Vertex Shaders</ListItem>
          <ListItem>Written in a "Shader Language" (GLSL)</ListItem>
          <ListItem>Tell the GPU what to do with each pixel/vertex</ListItem>
          <ListItem>Very fast, run a lot</ListItem>
          <ListItem>Isolated</ListItem>
        </List>
        <Layout>
          <Image
            src={Gradient}
            display="block"
            width="300"
            height="300"
          />
          <Fill>
            <CodePane
              lang="clike"
              source={shader}
              padding="0 0 0 1em"
              textSize="1em"
              theme="light"
            />
          </Fill>
        </Layout>
      </Slide>
    )
  }
}
