import {mat4} from 'gl-matrix';
import {Cube} from './project/Cube';
import {GLTF} from './project/GLTF';
import {RGB} from './project/RGB';
import {VertexUniform} from './project/VertexUniform';
import {Camera} from './webgpu/Camera';
import {RoundCameraController} from './webgpu/RoundCameraController';
import {SceneObject} from './webgpu/SceneObject';

export class Main {
  private static RAD:number = Math.PI / 180;

  private static CANVAS_WIDTH:number = innerWidth * devicePixelRatio;
  private static CANVAS_HEIGHT:number = innerHeight * devicePixelRatio;

  private static CUBE_NUM:number = 3000;
  private static COLOR_AMBIENT_LIGHT:Float32Array = new Float32Array([0.2, 0.2, 0.2, 1.0]);
  private static COLOR_DIRECTIONAL_LIGHT:Float32Array = new Float32Array([0.8, 0.8, 0.8, 1.0]);

  private stats:Stats;

  private canvas:HTMLCanvasElement;
  private gpu:WebGPURenderingContext;
  private commandQueue:WebGPUCommandQueue;
  private cubeRenderPipelineState:WebGPURenderPipelineState;
  private lightHelperRenderPipelineState:WebGPURenderPipelineState;
  private depthStencilState:WebGPUDepthStencilState;
  private renderPassDescriptor:WebGPURenderPassDescriptor;

  private camera:Camera;
  private cameraController:RoundCameraController;
  private cube:Cube;
  private cubeList:SceneObject[];
  private lightHelper:SceneObject;

  private model:GLTF;

  private time:number;

  constructor() {
    console.log(new Date());
    this.init();
  }

  private async init():Promise<void> {
    // Check whether WebGPU is enabled
    if (!('WebGPURenderingContext' in window)) {
      document.body.className = 'error';
      return;
    }

    // Stats setup
    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    // Canvas setup
    this.canvas = <HTMLCanvasElement> document.getElementById(('myCanvas'));
    this.canvas.width = Main.CANVAS_WIDTH;
    this.canvas.height = Main.CANVAS_HEIGHT;

    // Create WebGPURenderingContext
    this.gpu = this.canvas.getContext('webgpu');

    // Create WebGPUCommandQueue
    this.commandQueue = this.gpu.createCommandQueue();

    // Load metal shader file and create each WebGPUFunction to use for rendering and computing
    const shader:string = await fetch('shader/defaultShader.metal').then((response:Response) => response.text());
    const library:WebGPULibrary = this.gpu.createLibrary(shader);
    const vertexFunction:WebGPUFunction = library.functionWithName('vertex_main');
    const vertexFunction2:WebGPUFunction = library.functionWithName('vertex_main2');
    const fragmentFunction:WebGPUFunction = library.functionWithName('fragment_main');

    if (!library || !vertexFunction || !vertexFunction2 || !fragmentFunction) {
      return;
    }

    // Create pipelineState for render
    const cubeRenderPipelineDescriptor:WebGPURenderPipelineDescriptor = new WebGPURenderPipelineDescriptor();
    cubeRenderPipelineDescriptor.vertexFunction = vertexFunction;
    cubeRenderPipelineDescriptor.fragmentFunction = fragmentFunction;
    cubeRenderPipelineDescriptor.colorAttachments[0].pixelFormat = WebGPUPixelFormat.BGRA8Unorm;
    cubeRenderPipelineDescriptor.depthAttachmentPixelFormat = WebGPUPixelFormat.Depth32Float;
    this.cubeRenderPipelineState = this.gpu.createRenderPipelineState(cubeRenderPipelineDescriptor);

    const lightHelperRenderPipelineDescriptor:WebGPURenderPipelineDescriptor = new WebGPURenderPipelineDescriptor();
    lightHelperRenderPipelineDescriptor.vertexFunction = vertexFunction2;
    lightHelperRenderPipelineDescriptor.fragmentFunction = fragmentFunction;
    lightHelperRenderPipelineDescriptor.colorAttachments[0].pixelFormat = WebGPUPixelFormat.BGRA8Unorm;
    lightHelperRenderPipelineDescriptor.depthAttachmentPixelFormat = WebGPUPixelFormat.Depth32Float;
    this.lightHelperRenderPipelineState = this.gpu.createRenderPipelineState(lightHelperRenderPipelineDescriptor);

    // Create pipelineState for render depth
    const depthStencilDescriptor:WebGPUDepthStencilDescriptor = new WebGPUDepthStencilDescriptor();
    depthStencilDescriptor.depthCompareFunction = WebGPUCompareFunction.less;
    depthStencilDescriptor.depthWriteEnabled = true;
    this.depthStencilState = this.gpu.createDepthStencilState(depthStencilDescriptor);

    // Create WebGPURenderPassDescriptor
    this.renderPassDescriptor = new WebGPURenderPassDescriptor();
    const colorAttachment0:WebGPURenderPassColorAttachmentDescriptor = this.renderPassDescriptor.colorAttachments[0];
    colorAttachment0.storeAction = WebGPUStoreAction.store;
    colorAttachment0.clearColor = [0.3, 0.6, 0.8, 1.0];

    // Create depth texture
    const depthTextureDescriptor:WebGPUTextureDescriptor = new WebGPUTextureDescriptor(
      WebGPUPixelFormat.Depth32Float, Main.CANVAS_WIDTH, Main.CANVAS_HEIGHT, false);
    depthTextureDescriptor.textureType = WebGPUTextureType.type2D;
    depthTextureDescriptor.sampleCount = 1;
    depthTextureDescriptor.usage = WebGPUTextureUsage.unknown;
    depthTextureDescriptor.storageMode = WebGPUStorageMode.private;
    const depthTexture:WebGPUTexture = this.gpu.createTexture(depthTextureDescriptor);

    const depthAttachment:WebGPURenderPassDepthAttachmentDescriptor = this.renderPassDescriptor.depthAttachment;
    depthAttachment.storeAction = WebGPUStoreAction.store;
    depthAttachment.clearDepth = 1.0;
    depthAttachment.texture = depthTexture;

    // Initialize objects
    this.cube = new Cube();
    this.cube.createBuffer(this.gpu);

    // const cubeScale:number = 2.0;
    // const cubeScale:number = 4.0;
    const cubeScale:number = 0.04;
    const cubeRange:number = 100;
    const pi2:number = Math.PI * 2;

    this.cubeList = [];
    for (let i:number = 0; i < Main.CUBE_NUM; i++) {
      const obj:SceneObject = new SceneObject();
      obj.scaleX = obj.scaleY = obj.scaleZ = cubeScale;
      obj.x = (Math.random() - 0.5) * cubeRange;
      obj.y = (Math.random() - 0.5) * cubeRange;
      obj.z = (Math.random() - 0.5) * cubeRange;
      obj.rotationX = Math.random() * pi2;
      obj.rotationZ = Math.random() * pi2;
      const vertexUniform:VertexUniform = new VertexUniform();
      vertexUniform.createBuffer(this.gpu);
      obj.vertexUniform = vertexUniform;
      // const color:RGB = RGB.createFromHSV(360 * Math.random(), 0.8, 0.9);
      const color:RGB = RGB.createFromHSV(Math.atan2(obj.z, obj.x) / Main.RAD, 0.8 * Math.sqrt(obj.x * obj.x + obj.z * obj.z) / (cubeRange / 2), 0.9);
      vertexUniform.baseColor = new Float32Array([color.r, color.g, color.b, 1.0]);
      vertexUniform.ambientLightColor = Main.COLOR_AMBIENT_LIGHT;
      vertexUniform.directionalLightColor = Main.COLOR_DIRECTIONAL_LIGHT;
      this.cubeList.push(obj);
    }

    this.lightHelper = new SceneObject();
    this.lightHelper.rotationX = 45 * Main.RAD;
    this.lightHelper.rotationZ = 45 * Main.RAD;
    const vertexUniform:VertexUniform = new VertexUniform();
    vertexUniform.createBuffer(this.gpu);
    this.lightHelper.vertexUniform = vertexUniform;
    vertexUniform.baseColor = Main.COLOR_DIRECTIONAL_LIGHT;

    this.model = new GLTF();
    // await this.model.loadModel('assets/Suzanne.gltf', true);
    await this.model.loadModel('assets/Duck.gltf', true);
    this.model.createBuffer(this.gpu);

    // Initialize camera
    this.camera = new Camera(45 * Main.RAD, Main.CANVAS_WIDTH / Main.CANVAS_HEIGHT, 0.1, 1000.0);
    this.cameraController = new RoundCameraController(this.camera, this.canvas);
    this.canvas.style.cursor = 'move';
    this.cameraController.radius = 150;
    this.cameraController.radiusOffset = 2;
    this.cameraController.rotate(0, 0);

    // Initialize values
    this.time = 0;

    this.render();
  }

  private render():void {
    this.stats.begin();

    // Update objects
    const rad:number = this.time / 100;
    const lightDirection:Float32Array = new Float32Array([Math.cos(rad), 0.4, Math.sin(rad)]);
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

    // Prepare command
    const commandBuffer:WebGPUCommandBuffer = this.commandQueue.createCommandBuffer();
    const drawable:WebGPUDrawable = this.gpu.nextDrawable();
    this.renderPassDescriptor.colorAttachments[0].texture = drawable.texture;

    // Render cube
    this.renderPassDescriptor.colorAttachments[0].loadAction = WebGPULoadAction.clear;
    this.renderPassDescriptor.depthAttachment.loadAction = WebGPULoadAction.clear;
    const cubeRenderCommandEncoder:WebGPURenderCommandEncoder = commandBuffer.createRenderCommandEncoderWithDescriptor(this.renderPassDescriptor);
    cubeRenderCommandEncoder.setRenderPipelineState(this.cubeRenderPipelineState);
    cubeRenderCommandEncoder.setDepthStencilState(this.depthStencilState);
    // cubeRenderCommandEncoder.setVertexBuffer(this.cube.vertexBuffer, 0, 0);
    cubeRenderCommandEncoder.setVertexBuffer(this.model.vertexBuffer, 0, 0);

    for (let i:number = 0; i < cubeLength; i++) {
      const obj:SceneObject = this.cubeList[i];
      const objMMatrix:mat4 = obj.getModelMtx();
      const objectMVPMatrix:mat4 = mat4.create();
      mat4.multiply(objectMVPMatrix, cameraMatrix, objMMatrix);

      const vertexUniform:VertexUniform = obj.vertexUniform as VertexUniform;
      vertexUniform.mvpMatrix = objectMVPMatrix;
      vertexUniform.modelMatrix = objMMatrix;
      vertexUniform.directionalLightDirection = lightDirection;
      cubeRenderCommandEncoder.setVertexBuffer(obj.vertexUniform.buffer, 0, 1);

      // cubeRenderCommandEncoder.drawPrimitives(WebGPUPrimitiveType.triangle, 0, this.cube.numVertices);
      cubeRenderCommandEncoder.drawPrimitives(WebGPUPrimitiveType.triangle, 0, this.model.numVertices);
    }
    cubeRenderCommandEncoder.endEncoding();

    // Render light helper
    this.renderPassDescriptor.colorAttachments[0].loadAction = WebGPULoadAction.load;
    this.renderPassDescriptor.depthAttachment.loadAction = WebGPULoadAction.load;
    const lightHelperRenderCommandEncoder:WebGPURenderCommandEncoder = commandBuffer.createRenderCommandEncoderWithDescriptor(this.renderPassDescriptor);
    lightHelperRenderCommandEncoder.setRenderPipelineState(this.lightHelperRenderPipelineState);
    lightHelperRenderCommandEncoder.setDepthStencilState(this.depthStencilState);
    lightHelperRenderCommandEncoder.setVertexBuffer(this.cube.vertexBuffer, 0, 0);

    const lightMMatrix:mat4 = this.lightHelper.getModelMtx();
    const lightMVPMatrix:mat4 = mat4.create();
    mat4.multiply(lightMVPMatrix, cameraMatrix, lightMMatrix);
    const vertexUniform:VertexUniform = this.lightHelper.vertexUniform as VertexUniform;
    vertexUniform.mvpMatrix = lightMVPMatrix;
    lightHelperRenderCommandEncoder.setVertexBuffer(this.lightHelper.vertexUniform.buffer, 0, 1);
    lightHelperRenderCommandEncoder.drawPrimitives(WebGPUPrimitiveType.linestrip, 0, this.cube.numVertices);
    lightHelperRenderCommandEncoder.endEncoding();

    // Commit command
    commandBuffer.presentDrawable(drawable);
    commandBuffer.commit();

    this.stats.end();

    requestAnimationFrame(() => this.render());
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Main();
});
