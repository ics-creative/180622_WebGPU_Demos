#include <metal_stdlib>

using namespace metal;

struct VertexUniform
{
  float4x4 mvpMatrix;
};

struct VertexAttribute
{
  packed_float3 position;
  packed_float3 normal;
  packed_float2 uv;
};

struct Varying
{
  float4 position [[position]];
  float2 uv;
};

struct FragmentUniform
{
  uint width;
  uint height;
};

vertex Varying vertex_main(device VertexAttribute *attributes [[buffer(0)]],
                           constant VertexUniform &uniforms [[buffer(1)]],
                           uint vid [[vertex_id]])
{
  float4 pos = float4(attributes[vid].position, 1.0);
  Varying varying;
  varying.position = uniforms.mvpMatrix * pos;

  varying.uv = attributes[vid].uv;
  return varying;
}

float4 textureSample(device uint8_t *textureData,
                     float2 uv,
                     float width,
                     float height)
{
  uint ix = (width - 1) * uv[0];
  uint iy = (height - 1) * (1.0 - uv[1]);
  uint idx = (iy * width + ix) * 4;
  float r = textureData[idx];
  float g = textureData[idx + 1];
  float b = textureData[idx + 2];
  float a = textureData[idx + 3];
  return float4(r, g, b, a) / 255;
}

fragment float4 fragment_main(constant FragmentUniform &uniforms [[buffer(0)]],
                              device uint8_t *textureData [[buffer(1)]],
                              constant float &time [[buffer(2)]],
                              Varying varying [[stage_in]])
{
  varying.uv[0] = fract(varying.uv[0] + time);
  return textureSample(textureData, varying.uv, uniforms.width, uniforms.height);
}