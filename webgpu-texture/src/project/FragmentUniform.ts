import {Uniform} from '../webgpu/Uniform';

export class FragmentUniform extends Uniform {
  public static readonly BUFFER_LENGTH:number = 1;

  // Layout
  // 0 = time:float

  public get time():number {
    return this._bufferData[0];
  }

  public set time(value:number) {
    this._bufferData[0] = value;
  }

  constructor() {
    super();
    this._bufferDataLength = FragmentUniform.BUFFER_LENGTH;
  }
}
