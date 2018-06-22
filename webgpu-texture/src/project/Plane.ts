import {Primitive} from '../webgpu/Primitive';

export class Plane extends Primitive {
  constructor() {
    super();
    this._numAttributes = 6;
    this._numVertices = 6;
    this._bufferData = new Float32Array([
      // position(x,y,z), normal(x,y,z), uv
      1.0, 0.0, 1.0, 0.0, -1.0, 0.0, 1.0, 1.0,
      -1.0, 0.0, 1.0, 0.0, -1.0, 0.0, 0.0, 1.0,
      -1.0, 0.0, -1.0, 0.0, -1.0, 0.0, 0.0, 0.0,
      1.0, 0.0, -1.0, 0.0, -1.0, 0.0, 1.0, 0.0,
      1.0, 0.0, 1.0, 0.0, -1.0, 0.0, 1.0, 1.0,
      -1.0, 0.0, -1.0, 0.0, -1.0, 0.0, 0.0, 0.0
    ]);
  }
}
