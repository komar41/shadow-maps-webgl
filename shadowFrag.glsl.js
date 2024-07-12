export default `#version 300 es
precision highp float;

uniform sampler2D uSampler;

in vec4 vColor;
in vec4 vLightSpacePos;
out vec4 outColor;

vec3 shadowCalculation(vec4 lightSpacePos) {
    vec3 projCoords = lightSpacePos.xyz / lightSpacePos.w;
    projCoords = projCoords * 0.5 + 0.5;
    return projCoords;
}

void main() {
    vec3 projCoords = shadowCalculation(vLightSpacePos);
    // float closestDepth = texture(uSampler, projCoords.xy).r;
    float currentDepth = projCoords.z;

    float bias = 0.0025;
    float shadow = 0.0;
    vec2 texelSize = vec2(1.0) / vec2(textureSize(uSampler, 0));
    for(int x = -2; x <= 2; ++x)
    {
        for(int y = -2; y <= 2; ++y)
        {
            float pcfDepth = texture(uSampler, projCoords.xy + vec2(x, y) * texelSize).r; 
            shadow += currentDepth - bias > pcfDepth ? 1.0 : 0.0;        
        }    
    }
    shadow /= 16.0;
    outColor = vec4((1.0-shadow*0.5)*vColor.rgb, 1);
    // outColor = vec4(vColor.rgb,1);
}
`;