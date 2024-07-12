export default `#version 300 es
precision highp float;

uniform sampler2D uSampler;

in vec2 vTexcoord;
out vec4 outColor;


void main() {
    float depth = texture(uSampler, vTexcoord).r;
    
    outColor = vec4(vec3(depth),1);
}
`;