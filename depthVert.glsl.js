export default `#version 300 es

in vec3 position;
out vec2 vTexcoord;

void main() {
    gl_Position = vec4(position, 1);
    vTexcoord = position.xy * 0.5 + 0.5;
}    
`;