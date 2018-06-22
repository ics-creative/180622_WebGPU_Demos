import {ProgramObject, UniformType} from '../webgl/ProgramObject';

export class ColorShaderProgram extends ProgramObject {
  protected init():void {
    // language=GLSL
    this._vertexShaderSource = `
      attribute vec3 position;
      attribute vec3 normal;
      
      uniform mat4 mvpMatrix;
      uniform vec4 baseColor;
    
      varying   vec4 vColor;
      
      void main(void)
      {
        vec4 pos = vec4(position, 1.0);
        gl_Position = mvpMatrix * pos;
        
        vColor = baseColor;
      }
    `;

    // language=GLSL
    this._fragmentShaderSource = `
      precision mediump float;
      
      varying vec4 vColor;
      
      void main(void)
      {
        gl_FragColor = vColor;
      }
    `;

    this.uniformList[0] = {
      type: UniformType.TYPE_MATRIX,
      name: 'mvpMatrix',
      location: -1
    };

    this.uniformList[1] = {
      type: UniformType.TYPE_VECTOR4,
      name: 'baseColor',
      location: -1
    };

    this.attributeList[0] = {
      name: 'position',
      stride: 3,
      location: -1
    };

    this.attributeList[1] = {
      name: 'normal',
      stride: 3,
      location: -1
    };
  }
}