import {vec4} from 'gl-matrix';
import {Uniform} from '../webgl/Uniform';

export class VertexUniform extends Uniform {
  private _baseColor:vec4;

  public get baseColor():vec4 {
    return this._baseColor;
  }

  public set baseColor(value:vec4) {
    this._baseColor = value;
  }

  constructor() {
    super();
  }
}
