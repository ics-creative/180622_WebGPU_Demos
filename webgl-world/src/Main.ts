import {GUI, GUIController} from 'dat-gui';
import {mat4, vec3, vec4} from 'gl-matrix';
import {ColorShaderProgram} from './project/ColorShaderProgram';
import {Cube} from './project/Cube';
import {GLTF} from './project/GLTF';
import {GUIPanel} from './project/GUIPanel';
import {LightingShaderProgram} from './project/LightingShaderProgram';
import {RGB} from './project/RGB';
import {VertexUniform} from './project/VertexUniform';
import {Camera} from './webgl/Camera';
import {Primitive} from './webgl/Primitive';
import {ProgramObject} from './webgl/ProgramObject';
import {RoundCameraController} from './webgl/RoundCameraController';
import {SceneObject} from './webgl/SceneObject';

declare let dat:any;

export class Main {
  private static RAD:number = Math.PI / 180;

  private static CANVAS_WIDTH:number = innerWidth * devicePixelRatio;
  private static CANVAS_HEIGHT:number = innerHeight * devicePixelRatio;

  private static COLOR_AMBIENT_LIGHT:vec4 = vec4.fromValues(0.2, 0.2, 0.2, 1.0);
  private static COLOR_DIRECTIONAL_LIGHT:vec4 = vec4.fromValues(0.8, 0.8, 0.8, 1.0);

  private stats:Stats;

  private canvas:HTMLCanvasElement;
  private gl:WebGLRenderingContext;

  private cubeProgram:ProgramObject;
  private lightHelperProgram:ProgramObject;

  private camera:Camera;
  private cameraController:RoundCameraController;
  private cube:Cube;
  private useModel:boolean;
  private cubeNum:number;
  private cubeList:SceneObject[];
  private lightHelper:SceneObject;

  private model:GLTF;

  private time:number;

  constructor() {
    console.log(new Date());
    this.init();
  }

  private async init():Promise<void> {
    // Stats setup
    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    // GUI setup
    let gui:GUI = new dat.GUI({autoPlace: true});
    let instanceFolder:GUI = gui.addFolder('Instance');
    instanceFolder.open();
    let panel:GUIPanel = new GUIPanel();
    let instanceNumSlider:GUIController = instanceFolder.add(panel, 'num', 1000, 6000).step(100);
    panel.setGUITitle(gui, 'num', 'Num');
    instanceNumSlider.onFinishChange((value:number) => {
      this.cubeNum = value;
      this.resetInstance();
    });
    let useModelCheck:GUIController = instanceFolder.add(panel, 'useModel');
    panel.setGUITitle(gui, 'useModel', 'Model');
    useModelCheck.onFinishChange((value:boolean) => {
      this.useModel = value;
      this.resetInstance();
    });
    this.cubeNum = panel.num;
    this.useModel = panel.useModel;

    // Canvas setup
    this.canvas = <HTMLCanvasElement> document.getElementById(('myCanvas'));
    this.canvas.width = Main.CANVAS_WIDTH;
    this.canvas.height = Main.CANVAS_HEIGHT;

    // Create WebGLRenderingContext
    this.gl = this.canvas.getContext('webgl');

    const isIPhone:boolean = /iP(hone|(o|a)d)/.test(navigator.userAgent);

    // Create Program
    this.cubeProgram = new LightingShaderProgram();
    this.cubeProgram.creatProgram(this.gl);
    this.cubeProgram.getUniform('ambientLightColor').vector4 = Main.COLOR_AMBIENT_LIGHT;
    this.cubeProgram.getUniform('directionalLightColor').vector4 = Main.COLOR_DIRECTIONAL_LIGHT;

    this.lightHelperProgram = new ColorShaderProgram();
    this.lightHelperProgram.creatProgram(this.gl);

    // Initialize rendering setting
    this.gl.clearColor(0.3, 0.6, 0.8, 1.0);
    this.gl.clearDepth(1.0);
    // this.gl.enable(this.gl.CULL_FACE);
    // this.gl.frontFace(this.gl.CCW);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);

    // Initialize objects
    this.cube = new Cube();
    this.cube.createBuffer(this.gl);

    this.cubeList = [];
    this.resetInstance();

    this.lightHelper = new SceneObject();
    this.lightHelper.rotationX = 45 * Main.RAD;
    this.lightHelper.rotationZ = 45 * Main.RAD;
    const vertexUniform:VertexUniform = new VertexUniform();
    this.lightHelper.vertexUniform = vertexUniform;
    vertexUniform.baseColor = Main.COLOR_DIRECTIONAL_LIGHT;

    this.model = new GLTF();
    // await this.model.loadModel('assets/Suzanne.gltf', true);
    await this.model.loadModel('assets/Suzanne.gltf', true);
    this.model.createBuffer(this.gl);

    // Initialize camera
    this.camera = new Camera(45 * Main.RAD, Main.CANVAS_WIDTH / Main.CANVAS_HEIGHT, 0.1, 1000.0);
    this.cameraController = new RoundCameraController(this.camera, this.canvas);
    this.canvas.style.cursor = 'move';
    this.cameraController.radius = isIPhone ? 250 : 150;
    this.cameraController.radiusOffset = 2;
    this.cameraController.rotate(0, 0);

    // Initialize values
    this.time = 0;

    this.render();
  }

  private resetInstance():void {
    const length:number = this.cubeList.length;
    for (let i:number = 0; i < length; i++) {
      this.cubeList[i].vertexUniform = null;
      this.cubeList[i] = undefined;
    }

    let cubeScale:number;
    if (this.useModel) {
      cubeScale = 4.0;
    } else {
      cubeScale = 2.0;
    }

    const cubeRange:number = 100;
    const pi2:number = Math.PI * 2;

    this.cubeList = [];
    for (let i:number = 0; i < this.cubeNum; i++) {
      const obj:SceneObject = new SceneObject();
      obj.scaleX = obj.scaleY = obj.scaleZ = cubeScale;
      obj.x = (Math.random() - 0.5) * cubeRange;
      obj.y = (Math.random() - 0.5) * cubeRange;
      obj.z = (Math.random() - 0.5) * cubeRange;
      obj.rotationX = Math.random() * pi2;
      obj.rotationZ = Math.random() * pi2;

      const vertexUniform:VertexUniform = new VertexUniform();
      obj.vertexUniform = vertexUniform;
      // const color:RGB = RGB.createFromHSV(360 * Math.random(), 0.8, 0.9);
      const color:RGB = RGB.createFromHSV(Math.atan2(obj.z, obj.x) / Main.RAD, 0.8 * Math.sqrt(obj.x * obj.x + obj.z * obj.z) / (cubeRange / 2), 0.9);
      vertexUniform.baseColor = vec4.fromValues(color.r, color.g, color.b, 1.0);

      this.cubeList.push(obj);
    }
  }

  private render():void {
    this.stats.begin();

    // Update objects
    const rad:number = this.time / 100;
    const lightDirection:vec3 = vec3.fromValues(Math.cos(rad), 0.4, Math.sin(rad));
    this.lightHelper.x = lightDirection[0] * 80;
    this.lightHelper.y = lightDirection[1] * 80;
    this.lightHelper.z = lightDirection[2] * 80;

    const cubeLength:number = this.cubeList.length;
    for (let i:number = 0; i < cubeLength; i++) {
      const obj:SceneObject = this.cubeList[i];
      if (((this.time + i * 7) / 50 << 0) % 10 === 0) {
        obj.rotationY += 0.2;
      }
      else {
        obj.rotationX += 0.01;
      }
    }

    this.time += 1;

    // Update camera
    this.cameraController.upDate(0.1);
    const cameraMatrix:mat4 = this.camera.getCameraMtx();

    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

    // Render cube
    this.cubeProgram.bindProgram(this.gl);
    let geometry:Primitive;
    if (this.useModel) {
      geometry = this.model;
    } else {
      geometry = this.cube;
    }
    geometry.bindVertexbuffer(this.gl, this.cubeProgram);
    for (let i:number = 0; i < cubeLength; i++) {
      const obj:SceneObject = this.cubeList[i];
      const objMMatrix:mat4 = obj.getModelMtx();
      const objectMVPMatrix:mat4 = mat4.create();
      mat4.multiply(objectMVPMatrix, cameraMatrix, objMMatrix);

      this.cubeProgram.getUniform('mvpMatrix').matrix = objectMVPMatrix;
      this.cubeProgram.getUniform('modelMatrix').matrix = objMMatrix;
      this.cubeProgram.getUniform('directionalLightDirection').vector3 = lightDirection;
      this.cubeProgram.getUniform('baseColor').vector4 = (obj.vertexUniform as VertexUniform).baseColor;
      this.cubeProgram.bindUniform(this.gl);

      this.gl.drawArrays(this.gl.TRIANGLES, 0, geometry.numVertices);
    }

    // Render light helper
    this.lightHelperProgram.bindProgram(this.gl);
    this.cube.bindVertexbuffer(this.gl, this.lightHelperProgram);

    const lightMMatrix:mat4 = this.lightHelper.getModelMtx();
    const lightMVPMatrix:mat4 = mat4.create();
    mat4.multiply(lightMMatrix, cameraMatrix, lightMMatrix);
    this.lightHelperProgram.getUniform('mvpMatrix').matrix = lightMMatrix;
    this.lightHelperProgram.getUniform('baseColor').vector4 = (this.lightHelper.vertexUniform as VertexUniform).baseColor;
    this.lightHelperProgram.bindUniform(this.gl);
    this.gl.drawArrays(this.gl.LINE_STRIP, 0, this.cube.numVertices);

    this.gl.flush();

    this.stats.end();

    requestAnimationFrame(() => this.render());
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Main();
});
