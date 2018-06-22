import {Uniform} from '../webgpu/Uniform';

export class VertexUniform extends Uniform {
  public static readonly BUFFER_LENGTH:number = 47;

  // Layout
  // 0-15 = mvpMatrix:float4x4
  // 16-31 = modelMatrix:float4x4
  // 32-35 = baseColor:float4
  // 36-39 = ambientLightColor:float4
  // 40-43 = directionalLightColor:float4
  // 44-46 = directionalLightDirection:float3

  public get mvpMatrix():Float32Array {
    return this._bufferData.subarray(0, 16);
  }

  public set mvpMatrix(value:Float32Array) {
    this._copyData(value, 0, 16);
  }

  public get modelMatrix():Float32Array {
    return this._bufferData.subarray(16, 32);
  }

  public set modelMatrix(value:Float32Array) {
    this._copyData(value, 16, 16);
  }

  public get baseColor():Float32Array {
    return this._bufferData.subarray(32, 35);
  }

  public set baseColor(value:Float32Array) {
    this._copyData(value, 32, 4);
  }

  public get ambientLightColor():Float32Array {
    return this._bufferData.subarray(36, 39);
  }

  public set ambientLightColor(value:Float32Array) {
    this._copyData(value, 36, 4);
  }

  public get directionalLightColor():Float32Array {
    return this._bufferData.subarray(40, 43);
  }

  public set directionalLightColor(value:Float32Array) {
    this._copyData(value, 40, 4);
  }

  public get directionalLightDirection():Float32Array {
    return this._bufferData.subarray(44, 46);
  }

  public set directionalLightDirection(value:Float32Array) {
    this._copyData(value, 44, 3);
  }

  constructor() {
    super();
    this._bufferDataLength = VertexUniform.BUFFER_LENGTH;
  }
}
