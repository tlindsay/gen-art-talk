import React from 'react';
import styled from '@emotion/styled';
import {
  Slide,
  Heading
} from 'spectacle';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import fragmentShader from '../shaders/frag01.glsl';
import vertexShader from '../shaders/vert01.glsl';

let StyledCanvas = styled.canvas`
  border: 1px solid black;
`;

export default class ThreeSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cubeRotation: {
        x: 0,
        y: 0,
        z: 0
      },
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

    this.controls = new OrbitControls(this.camera, canvas);

    this.mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
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

    this.scene.add(new THREE.AmbientLight('#59314f'));

    let light = new THREE.PointLight('#45caf7', 1, 15.5);
    light.position.set(2, 2, -4).multiplyScalar(1.5);
    this.scene.add(light);

    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState() {
    this.mesh.rotateX(this.state.cubeRotation.x);
    this.mesh.rotateY(this.state.cubeRotation.y);
    this.mesh.rotateZ(this.state.cubeRotation.z);
    this.mesh.material.uniforms.time.value = this.state.time;
    this.setState(prevState => {
      return {
        cubeRotation: {
          x: Math.sin(prevState.time * (100 * Math.PI / 180)) * 0.05,
          y: Math.cos(prevState.time * (100 * Math.PI / 180)) * 0.05,
          z: Math.sin(prevState.time * (10 * Math.PI / 180)) * .05
        },
        time: prevState.time + 0.05
      }
    });
    this.controls.update();
    this.rAf = requestAnimationFrame(this.updateAnimationState);
  }

  componentDidUpdate() {
    this.renderer.render(this.scene, this.camera);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return(
      <Slide {...this.props} align="center top">
        <Heading size={2} margin="0 auto 1em">
          THREE.js
        </Heading>
        <StyledCanvas
          height="600"
          ref={this.canvasRef}
          width="600"
        >
        </StyledCanvas>
      </Slide>
    )
  }
}
