import {ProgramObject, ShaderAttribute} from './ProgramObject';

export class Primitive {
  protected _numAttributes:number;

  public get numAttributes():number {
    return this._numAttributes;
  }

  protected _numVertices:number;

  public get numVertices():number {
    return this._numVertices;
  }

  protected vboList:VertexAttribute[];

  constructor() {
    this.vboList = [];
  }

  public createBuffer(gl:WebGLRenderingContext):void {
  }

  public bindVertexbuffer(gl:WebGLRenderingContext, program:ProgramObject):void {
    const length:number = program.attributeList.length;
    for (let i:number = 0; i < length; i++) {
      const shaderAttibute:ShaderAttribute = program.attributeList[i];
      if (shaderAttibute.location >= 0) {
        let vertexAttribute:VertexAttribute = this.getVertexBuffer(shaderAttibute.name);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexAttribute.buffer);
        gl.enableVertexAttribArray(shaderAttibute.location);
        gl.vertexAttribPointer(shaderAttibute.location, shaderAttibute.stride, gl.FLOAT, false, vertexAttribute.byteStride, vertexAttribute.bufferOffset);
      }
    }
  }

  public getVertexBuffer(attributeName:string):VertexAttribute {
    const length:number = this.vboList.length;
    for (let i:number = 0; i < length; i++) {
      let attribute:VertexAttribute = this.vboList[i];
      if (attribute.name === attributeName) {
        return attribute;
      }
    }
    return null;
  }
}

export interface VertexAttribute {
  name:string;
  byteStride:number;
  bufferOffset:number;
  buffer:WebGLBuffer;
}