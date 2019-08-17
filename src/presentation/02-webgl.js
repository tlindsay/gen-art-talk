import React from 'react';
import {
  Slide,
  Heading,
  Appear,
  BlockQuote,
  Quote,
  Cite,
  List,
  ListItem,
  Link
} from 'spectacle';

export default class WebGLSlide extends React.Component {
  render() {
    return (
      <Slide {...this.props} align="center top">
        <Heading size={2}>What is WebGL?</Heading>
        <Appear>
          <BlockQuote>
            <Quote textColor="dark" textSize=".8em">WebGL is a cross-platform, royalty-free web standard for a low-level 3D graphics API based on OpenGL ES, exposed to ECMAScript via the HTML5 Canvas element. Developers familiar with OpenGL ES 2.0 will recognize WebGL as a Shader-based API using GLSL, with constructs that are semantically similar to those of the underlying OpenGL ES API. It stays very close to the OpenGL ES specification, with some concessions made for what developers expect out of memory-managed languages such as JavaScript. WebGL 1.0 exposes the OpenGL ES 2.0 feature set; WebGL 2.0 exposes the OpenGL ES 3.0 API.</Quote>
            <Cite>Khronos Group, Inc.</Cite>
          </BlockQuote>
        </Appear>
        <List textColor="dark" bulletStyle="">
          <Appear>
            <ListItem textAlign="left">Lets the browser access the GPU</ListItem>
          </Appear>
          <Appear>
            <ListItem textAlign="left">
              Works in all major browsers
              <Link
                href="https://caniuse.com/#feat=webgl"
                margin="auto auto auto 1em"
                target="_blank"
                textSize=".5em"
              >
                Can I Use
              </Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Low-level API</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link href="https://threejs.org">THREE.js</Link>
            </ListItem>
          </Appear>
        </List>
      </Slide>
    )
  }
}
