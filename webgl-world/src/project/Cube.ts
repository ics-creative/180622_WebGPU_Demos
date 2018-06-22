import {Primitive, VertexAttribute} from '../webgl/Primitive';

export class Cube extends Primitive {
  protected _bufferData:Float32Array;

  public get bufferData():Float32Array {
    return this._bufferData;
  }

  constructor() {
    super();
    this._numAttributes = 6;
    this._numVertices = 36;
    this._bufferData = new Float32Array([
      // position(x,y,z), normal(x,y,z)
      1.0, -1.0, 1.0, 0.0, -1.0, 0.0,
      -1.0, -1.0, 1.0, 0.0, -1.0, 0.0,
      -1.0, -1.0, -1.0, 0.0, -1.0, 0.0,
      1.0, -1.0, -1.0, 0.0, -1.0, 0.0,
      1.0, -1.0, 1.0, 0.0, -1.0, 0.0,
      -1.0, -1.0, -1.0, 0.0, -1.0, 0.0,

      1.0, 1.0, 1.0, 1.0, 0.0, 0.0,
      1.0, -1.0, 1.0, 1.0, 0.0, 0.0,
      1.0, -1.0, -1.0, 1.0, 0.0, 0.0,
      1.0, 1.0, -1.0, 1.0, 0.0, 0.0,
      1.0, 1.0, 1.0, 1.0, 0.0, 0.0,
      1.0, -1.0, -1.0, 1.0, 0.0, 0.0,

      -1.0, 1.0, 1.0, 0.0, 1.0, 0.0,
      1.0, 1.0, 1.0, 0.0, 1.0, 0.0,
      1.0, 1.0, -1.0, 0.0, 1.0, 0.0,
      -1.0, 1.0, -1.0, 0.0, 1.0, 0.0,
      -1.0, 1.0, 1.0, 0.0, 1.0, 0.0,
      1.0, 1.0, -1.0, 0.0, 1.0, 0.0,

      -1.0, -1.0, 1.0, -1.0, 0.0, 0.0,
      -1.0, 1.0, 1.0, -1.0, 0.0, 0.0,
      -1.0, 1.0, -1.0, -1.0, 0.0, 0.0,
      -1.0, -1.0, -1.0, -1.0, 0.0, 0.0,
      -1.0, -1.0, 1.0, -1.0, 0.0, 0.0,
      -1.0, 1.0, -1.0, -1.0, 0.0, 0.0,

      1.0, 1.0, 1.0, 0.0, 0.0, 1.0,
      -1.0, 1.0, 1.0, 0.0, 0.0, 1.0,
      -1.0, -1.0, 1.0, 0.0, 0.0, 1.0,
      -1.0, -1.0, 1.0, 0.0, 0.0, 1.0,
      1.0, -1.0, 1.0, 0.0, 0.0, 1.0,
      1.0, 1.0, 1.0, 0.0, 0.0, 1.0,

      1.0, -1.0, -1.0, 0.0, 0.0, -1.0,
      -1.0, -1.0, -1.0, 0.0, 0.0, -1.0,
      -1.0, 1.0, -1.0, 0.0, 0.0, -1.0,
      1.0, 1.0, -1.0, 0.0, 0.0, -1.0,
      1.0, -1.0, -1.0, 0.0, 0.0, -1.0,
      -1.0, 1.0, -1.0, 0.0, 0.0, -1.0
    ]);
  }

  public createBuffer(gl:WebGLRenderingContext):void {
    const buffer:WebGLBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._bufferData), gl.STATIC_DRAW);

    const positionAttribute:VertexAttribute = {
      name: 'position',
      byteStride: 24,
      bufferOffset: 0,
      buffer: buffer
    };
    this.vboList.push(positionAttribute);

    const normalAttribute:VertexAttribute = {
      name: 'normal',
      byteStride: 24,
      bufferOffset: 12,
      buffer: buffer
    };
    this.vboList.push(normalAttribute);
  }
}
