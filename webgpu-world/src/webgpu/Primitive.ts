export class Primitive {
  protected _numAttributes:number;

  public get numAttributes():number {
    return this._numAttributes;
  }

  protected _numVertices:number;

  public get numVertices():number {
    return this._numVertices;
  }

  protected _bufferData:Float32Array;

  public get bufferData():Float32Array {
    return this._bufferData;
  }

  protected _vertexBuffer:WebGPUBuffer;

  public get vertexBuffer():WebGPUBuffer {
    return this._vertexBuffer;
  }

  constructor() {
  }

  public createBuffer(gpu:WebGPURenderingContext):void {
    this._vertexBuffer = gpu.createBuffer(this._bufferData);
  }
}
