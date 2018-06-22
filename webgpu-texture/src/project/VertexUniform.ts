import {Uniform} from '../webgpu/Uniform';

export class VertexUniform extends Uniform {
  public static readonly BUFFER_LENGTH:number = 16;

  // Layout
  // 0-15 = mvpMatrix:float4x4

  public get mvpMatrix():Float32Array {
    return this._bufferData.subarray(0, 16);
  }

  public set mvpMatrix(value:Float32Array) {
    this._copyData(value, 0, 16);
  }

  constructor() {
    super();
    this._bufferDataLength = VertexUniform.BUFFER_LENGTH;
  }
}
