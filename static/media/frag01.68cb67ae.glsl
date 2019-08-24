#pragma glslify: noise = require('glsl-noise/simplex/3d');
#pragma glslify: hsl2rgb = require('glsl-hsl2rgb');

uniform float time;
uniform float aspect;
varying vec2 vUv;

void main () {
  vec2 center = vUv - 0.5;
  center.x *= aspect;

  float dist = length(center);
  // float alpha = smoothstep(0.25, 0.2475, dist);
  float alpha = 1.0;

  float n = noise(vec3(center * 1.25, time));
  vec3 color = hsl2rgb(
      0.8 + n * 0.1,
      0.5,
      0.5
      );
  gl_FragColor = vec4(color, alpha);
}
