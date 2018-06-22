#include <metal_stdlib>

using namespace metal;

struct VertexUniform
{
  float4x4 mvpMatrix;
  float4x4 modelMatrix;
  float4 baseColor;
  float4 ambientLightColor;
  float4 directionalLightColor;
  float3 directionalLightDirection;
} __attribute__ ((aligned (256)));

struct VertexAttribute
{
  packed_float3 position;
  packed_float3 normal;
};

struct Varying
{
  float4 position [[position]];
  float4 color;
};

vertex Varying vertex_main(device VertexAttribute *attributes [[buffer(0)]],
                           constant VertexUniform &uniforms [[buffer(1)]],
                           uint vid [[vertex_id]])
{
  float4 pos = float4(attributes[vid].position, 1.0);
  Varying v;
  v.position = uniforms.mvpMatrix * pos;

  float4 worldNormal = normalize(uniforms.modelMatrix * float4(attributes[vid].normal, 0.0));
  float diffuse = dot(worldNormal.xyz, normalize(uniforms.directionalLightDirection));
  diffuse = fmax(0.0, diffuse);

  v.color = uniforms.baseColor * (uniforms.ambientLightColor + diffuse * uniforms.directionalLightColor);
  return v;
}

fragment float4 fragment_main(Varying varying [[stage_in]])
{
  return varying.color;
}

vertex Varying vertex_main2(device VertexAttribute *attributes [[buffer(0)]],
                           constant VertexUniform &uniforms [[buffer(1)]],
                           uint vid [[vertex_id]])
{
  float4 pos = float4(attributes[vid].position, 1.0);
  Varying v;
  v.position = uniforms.mvpMatrix * pos;
  v.color = uniforms.baseColor;
  return v;
}