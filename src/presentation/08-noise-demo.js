import React from 'react';
import styled from '@emotion/styled';
import {
  Slide,
  Heading,
  CodePane,
  Layout,
  Fit,
  Fill
} from 'spectacle';

import * as THREE from 'three';

import fragmentShader from '../shaders/frag01.glsl';
import vertexShader from '../shaders/vert02.glsl';

let StyledCanvas = styled.canvas`
  border: 1px solid black;
`;

export default class NoiseDemoSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: { x: 0, y: 0, z: 0 },
      time: 0
    };
    this.canvasRef = React.createRef();
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    let canvas = this.canvasRef.current;
    let context = canvas.getContext('webgl');
    let { height, width } = canvas;

    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ canvas, context });
    this.renderer.setSize(width, height);
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
    this.camera.position.set(2, 2, -4);
    this.camera.lookAt(new THREE.Vector3());

    this.scene.add(new THREE.AmbientLight('#59314f'));

    let light = new THREE.PointLight('#45caf7', 1, 15.5);
    light.position.set(2, 2, -4).multiplyScalar(1.5);
    this.scene.add(light);

    this.mesh = new THREE.Mesh(
      new THREE.SphereGeometry(1, 100, 100),
      new THREE.ShaderMaterial({
        fragmentShader,
        vertexShader,
        uniforms: {
          aspect: { value: width / height },
          time: { value: 0 }
        }
      })
    );
    this.scene.add(this.mesh);

    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentDidUpdate() {
    this.renderer.render(this.scene, this.camera);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  updateAnimationState() {
    let { x, y, z } = this.state.rotation;
    let { time } = this.state;
    this.mesh.rotateX(x);
    this.mesh.rotateY(y);
    this.mesh.rotateZ(z);
    this.mesh.material.uniforms.time.value = time;
    this.setState(prevState => {
      return {
        rotation: {
          x: Math.sin(prevState.time * (100 * Math.PI / 180)) * 0.05,
          y: Math.cos(prevState.time * (100 * Math.PI / 180)) * 0.05,
          z: Math.sin(prevState.time * (10 * Math.PI / 180)) * .05
        },
        time: prevState.time + 0.05
      };
    });
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }
  render() {
    let code = `
#pragma glslify: noise = require(...);

varying vec2 vUv;
uniform float time;

void main() {
  vUv = uv;
  vec3 pos = position.xyz;

  pos += noise(vec4(pos, time)) * .15;

  gl_Position = projectionMatrix
                * modelViewMatrix
                * vec4(pos, 1.0);
}
    `;

    return (
      <Slide {...this.props} align="center top">
        <Heading size={2} margin="0 auto 1em">
          Noise Functions
        </Heading>
        <Layout>
          <Fit>
            <StyledCanvas
              height="300"
              ref={this.canvasRef}
              width="300"
            />
          </Fit>
          <Fill>
            <CodePane
              source={code}
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
