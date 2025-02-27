export default `#version 300 es

uniform mat4 uModel;
uniform mat4 uProjection;
uniform mat4 uView;
uniform mat4 uLightView;
uniform mat4 uLightProjection;
uniform vec4 uColor;
uniform vec3 uLightDir;
uniform bool uHasNormals;

in vec3 position;
in vec3 normal;

out vec4 vColor;
out vec4 vLightSpacePos;

void main() {
    // vColor = color;
    if(uHasNormals) {
        vec3 lightdir = normalize(uLightDir);
        float dotp = max(0.25,dot(lightdir,normal));
        vColor = vec4(dotp*uColor.rgb,1);
    }
    else {
        vColor = vec4(uColor.rgb,1);
    }

    vec4 worldPos = uModel * vec4(position, 1);
    vLightSpacePos = uLightProjection * uLightView * worldPos;
    gl_Position = uProjection * uView * worldPos;
}
`;