import {mat4, vec3, vec4} from 'gl-matrix';

export class ProgramObject {
  private _program:WebGLProgram;

  public get program():WebGLProgram {
    return this._program;
  }

  private _attributeList:ShaderAttribute[];

  public get attributeList():ShaderAttribute[] {
    return this._attributeList;
  }

  private _uniformList:ShaderUniform[];

  public get uniformList():ShaderUniform[] {
    return this._uniformList;
  }

  protected _vertexShaderSource:string;
  protected _fragmentShaderSource:string;

  constructor() {
    this._uniformList = [];
    this._attributeList = [];
    this.init();
  }

  protected init():void {

  }

  public creatProgram(gl:WebGLRenderingContext):void {
    const vShader:WebGLShader = this.creatShader(gl, this._vertexShaderSource, gl.VERTEX_SHADER);
    const fShader:WebGLShader = this.creatShader(gl, this._fragmentShaderSource, gl.FRAGMENT_SHADER);

    this._program = gl.createProgram();
    gl.attachShader(this._program, vShader);
    gl.attachShader(this._program, fShader);

    gl.linkProgram(this._program);

    let i:number;
    let length:number;

    length = this.attributeList.length;
    for (i = 0; i < length; i++) {
      let attribute:ShaderAttribute = this.attributeList[i];
      attribute.location = gl.getAttribLocation(this._program, attribute.name);
    }

    length = this.uniformList.length;
    for (i = 0; i < length; i++) {
      let uniform:ShaderUniform = this.uniformList[i];
      uniform.location = gl.getUniformLocation(this._program, uniform.name);
    }
  }

  private creatShader(gl:WebGLRenderingContext, source:string, type:number):WebGLShader {
    const shader:WebGLShader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      return shader;
    }
    else {
      console.log(type === gl.VERTEX_SHADER, gl.getShaderInfoLog(shader));
      return null;
    }
  }

  public bindShader(gl:WebGLRenderingContext):void {
    this.bindProgram(gl);
    this.bindUniform(gl);
  }

  public bindProgram(gl:WebGLRenderingContext):void {
    if (gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      gl.useProgram(this.program);
    }
    else {
      console.log(gl.getProgramInfoLog(this.program));
    }
  }

  public bindUniform(gl:WebGLRenderingContext):void {
    const length:number = this.uniformList.length;
    for (let i:number = 0; i < length; i++) {
      let uniform:ShaderUniform = this.uniformList[i];
      switch (uniform.type) {
        case UniformType.TYPE_MATRIX:
          gl.uniformMatrix4fv(uniform.location, false, uniform.matrix);
          break;
        case UniformType.TYPE_VALUE:
          gl.uniform1f(uniform.location, uniform.value);
          break;
        case UniformType.TYPE_VECTOR3:
          gl.uniform3fv(uniform.location, uniform.vector3);
          break;
        case UniformType.TYPE_VECTOR4:
          gl.uniform4fv(uniform.location, uniform.vector4);
          break;
        default:
          break;
      }
    }
  }

  public getUniform(uniformName:string):ShaderUniform {
    const length:number = this.uniformList.length;
    for (let i:number = 0; i < length; i++) {
      let uniform:ShaderUniform = this.uniformList[i];
      if (uniform.name === uniformName) {
        return uniform;
      }
    }
    return null;
  }
}

export interface ShaderAttribute {
  name:string;
  stride:number;
  location:number;
}

export interface ShaderUniform {
  type:UniformType;
  name:string;
  location:WebGLUniformLocation;
  value?:number;
  vector3?:vec3;
  vector4?:vec4;
  matrix?:mat4;
}

export enum UniformType {
  TYPE_VALUE = 0,
  TYPE_VECTOR3 = 1,
  TYPE_VECTOR4 = 2,
  TYPE_MATRIX = 3
}