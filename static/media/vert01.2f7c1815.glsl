varying vec2 vUv;
void main() {
  vUv = uv;
  vec3 pos = position.xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
