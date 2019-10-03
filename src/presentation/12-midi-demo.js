import React from 'react';
import styled from '@emotion/styled';
import {
  Slide
} from 'spectacle';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import SimplexNoise from 'simplex-noise';

import * as webmidi from 'webmidi';

import fragmentShader from '../shaders/frag02.glsl';
import vertexShader from '../shaders/vert03.glsl';

let StyledCanvas = styled.canvas`
  border: 1px solid black;
`;

export default class MIDIDemoSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bend: 0.1,
      cubeRotation: {
        x: 0,
        y: 0,
        z: 0
      },
      meshes: [],
      time: 0
    };

    webmidi.enable((err) => {
      if (err) {
        alert('Oops!');
        return;
      } else {
        this.input = webmidi.inputs[0];
        window.midiInput = this.input;

        this.input.addListener('pitchbend', 'all', this.pitchBend);
        this.input.addListener('controlchange', 'all', this.controlChange);
        this.input.addListener('noteon', 'all', this.keyDown);
        this.input.addListener('noteoff', 'all', this.keyUp);
      }
    });

    this.canvasRef = React.createRef();
    this.updateAnimationState = this.updateAnimationState.bind(this);
    this.pitchBend = this.pitchBend.bind(this);
    this.controlChange = this.controlChange.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.randomizeCoord = this.randomizeCoord.bind(this);
    this.simplex = new SimplexNoise();
  }

  async componentDidMount() {
    this.initializeCanvas();
  }

  initializeCanvas() {
    let canvas = this.canvasRef.current;
    let context = canvas.getContext('webgl');
    let { height, width } = canvas;

    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ canvas, context });
    this.renderer.setSize(width, height);
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
    this.camera.position.set(2, 2, -5);
    this.camera.lookAt(new THREE.Vector3());

    this.controls = new OrbitControls(this.camera, canvas);

    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.ShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: {
        aspect: { value: width / height },
        bend: { value: 0.1 },
        time: { value: 0 }
      }
    });

    this.scene.add(this.mesh);

    this.scene.add(new THREE.AmbientLight('#59314f'));

    let light = new THREE.PointLight('#45caf7', 1, 15.5);
    light.position.set(2, 2, -4).multiplyScalar(1.5);
    this.scene.add(light);

    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  pitchBend({ value }) {
    if (value === 0) { value = 0.1 }
    this.setState(prevState => {
      return { ...prevState, bend: value };
    });
  }

  controlChange({ value }) {
    if ( value === 0 ) { value = 0.1 }
    this.setState(prevState => {
      return { ...prevState, bend: Math.sin(value) };
    })
  }

  keyDown({ data, note }) {
    let coords = Array.from(data).map(this.randomizeCoord);
    let scale = Math.abs(this.simplex.noise3D(...coords));
    let mesh = new THREE.Mesh(this.geometry, this.material);
    mesh.name = note.number;
    this.setState(prevState => {
      return { ...prevState, meshes: [...prevState.meshes, mesh] };
    });
    this.scene.add(mesh);
    mesh.position.set(...coords);
    mesh.scale.set(scale, scale, scale);
  }

  keyUp({ note }) {
    let mesh = this.scene.getObjectByName(note.number);
    this.setState(prevState => {
      return { ...prevState, meshes: prevState.meshes.filter((m) => m !== mesh) }
    });
    this.scene.remove(mesh);
  }

  randomizeCoord(val) {
    let newVal = val / 100.0;
    if (Math.random() < 0.5) {
      newVal *= -1;
    }
    return newVal + this.simplex.noise3D(...Object.values(this.state.cubeRotation));
  }

  updateAnimationState() {
    for(let mesh of this.state.meshes) {
      mesh.rotateX(this.state.cubeRotation.x);
      mesh.rotateY(this.state.cubeRotation.y);
      mesh.rotateZ(this.state.cubeRotation.z);
      mesh.material.uniforms.time.value = this.state.time;
      mesh.material.uniforms.bend.value = this.state.bend;
    }
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
    if(this.input) { this.input.removeListener(); }
    cancelAnimationFrame(this.rAF);
    this.state.meshes.forEach(m => m.dispose());
    this.geometry.dispose();
    this.material.dispose();
    this.scene.dispose();
  }

  render() {
    return(
      <Slide {...this.props} align="center top">
        <StyledCanvas
          height="1000"
          ref={this.canvasRef}
          width="1000"
        >
        </StyledCanvas>
      </Slide>
    )
  }
}
