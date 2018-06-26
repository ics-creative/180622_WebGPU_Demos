import {Primitive, VertexAttribute} from '../webgl/Primitive';
import {GLTFData, GLTFLoader} from './GLTFLoader';

export class GLTF extends Primitive {
  protected _bufferData:Float32Array;

  public get bufferData():Float32Array {
    return this._bufferData;
  }

  constructor() {
    super();
  }

  public async loadModel(url:string, centering:boolean = false):Promise<void> {
    const data:GLTFData = await GLTFLoader.load(url);

    const numIndices:number = (data.indices.data as Uint16Array).length;

    this._numAttributes = data.position.num + data.normal.num;
    this._numVertices = numIndices;

    let centerX:number = 0.0;
    let centerY:number = 0.0;
    let centerZ:number = 0.0;
    if (centering) {
      const posMin:number[] = data.position.min;
      const posMax:number[] = data.position.max;
      centerX = (posMax[0] - posMin[0]) / 2 + posMin[0];
      centerY = (posMax[1] - posMin[1]) / 2 + posMin[1];
      centerZ = (posMax[2] - posMin[2]) / 2 + posMin[2];
    }

    this._bufferData = new Float32Array(this._numAttributes * this._numVertices);
    for (let i:number = 0; i < this._numVertices; i++) {
      const bufferVertexOffset:number = i * 6;
      const sourceVertexOffset:number = data.indices.data[i] * 3;
      this._bufferData[bufferVertexOffset] = data.position.data[sourceVertexOffset] - centerX;
      this._bufferData[bufferVertexOffset + 1] = data.position.data[sourceVertexOffset + 1] - centerY;
      this._bufferData[bufferVertexOffset + 2] = data.position.data[sourceVertexOffset + 2] - centerZ;

      this._bufferData[bufferVertexOffset + 3] = data.normal.data[sourceVertexOffset];
      this._bufferData[bufferVertexOffset + 4] = data.normal.data[sourceVertexOffset + 1];
      this._bufferData[bufferVertexOffset + 5] = data.normal.data[sourceVertexOffset + 2];
    }
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
