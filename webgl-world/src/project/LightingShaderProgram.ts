import {ProgramObject, UniformType} from '../webgl/ProgramObject';

export class LightingShaderProgram extends ProgramObject {
  protected init():void {
    // language=GLSL
    this._vertexShaderSource = `
      attribute vec3 position;
      attribute vec3 normal;
      
      uniform mat4 mvpMatrix;
      uniform mat4 modelMatrix;
      uniform vec4 baseColor;
      uniform vec4 ambientLightColor;
      uniform vec4 directionalLightColor;
      uniform vec3 directionalLightDirection;
    
      varying   vec4 vColor;
      
      void main(void)
      {
        vec4 pos = vec4(position, 1.0);
        gl_Position = mvpMatrix * pos;
        
        vec4 worldNormal = normalize(modelMatrix * vec4(normal, 0.0));
        float diffuse = dot(worldNormal.xyz, normalize(directionalLightDirection));
        diffuse = clamp(diffuse, 0.0, 1.0);
        
        vColor = baseColor * (ambientLightColor + diffuse * directionalLightColor);
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
      type: UniformType.TYPE_MATRIX,
      name: 'modelMatrix',
      location: -1
    };

    this.uniformList[2] = {
      type: UniformType.TYPE_VECTOR4,
      name: 'baseColor',
      location: -1
    };

    this.uniformList[3] = {
      type: UniformType.TYPE_VECTOR4,
      name: 'ambientLightColor',
      location: -1
    };

    this.uniformList[4] = {
      type: UniformType.TYPE_VECTOR4,
      name: 'directionalLightColor',
      location: -1
    };

    this.uniformList[5] = {
      type: UniformType.TYPE_VECTOR3,
      name: 'directionalLightDirection',
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