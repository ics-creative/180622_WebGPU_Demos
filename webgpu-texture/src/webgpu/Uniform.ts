export class Uniform {
  protected _bufferData:Float32Array;

  public get bufferData():Float32Array {
    return this._bufferData;
  }

  protected _bufferDataLength:number;

  public get bufferDataLength():number {
    return this._bufferDataLength;
  }

  protected _buffer:WebGPUBuffer;

  public get buffer():WebGPUBuffer {
    return this._buffer;
  }

  constructor() {
  }

  public createBuffer(gpu:WebGPURenderingContext):void {
    this._buffer = gpu.createBuffer(new Float32Array(this._bufferDataLength));
    this._bufferData = new Float32Array(this._buffer.contents);
  }

  protected _copyData(data:Float32Array, offset:number, count:number):void {
    for (let i:number = 0; i < count; i++) {
      this._bufferData[offset + i] = data[i];
    }
  }
}
