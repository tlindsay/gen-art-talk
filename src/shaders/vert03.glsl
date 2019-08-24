#pragma glslify: noise = require('glsl-noise/simplex/4d');

varying vec2 vUv;

uniform float time;
uniform float bend;
uniform float aspect;

void main() {
  vUv = uv;
  vec3 pos = position.xyz;

  if (bend > 0.1) {
    pos += noise(vec4(pos, time)) * bend;
  }

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

