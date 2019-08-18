#pragma glslify: noise = require('glsl-noise/simplex/4d');

varying vec2 vUv;

uniform float time;

void main() {
  vUv = uv;
  vec3 pos = position.xyz;
  pos += noise(vec4(pos, time)) * .15;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

