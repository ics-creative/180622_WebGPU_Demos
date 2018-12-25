import {mat4} from 'gl-matrix';
import {FragmentUniform} from './project/FragmentUniform';
import {Plane} from './project/Plane';
import {VertexUniform} from './project/VertexUniform';
import {Camera} from './webgpu/Camera';
import {RoundCameraController} from './webgpu/RoundCameraController';
import {SceneObject} from './webgpu/SceneObject';
import {TextureData} from './webgpu/TextureData';
import {WebMetalTranslator} from './webgpu/WebMetalTranslator';

export class Main {
  private static RAD:number = Math.PI / 180;

  private static CANVAS_WIDTH:number = innerWidth * devicePixelRatio;
  private static CANVAS_HEIGHT:number = innerHeight * devicePixelRatio;

  private stats:Stats;

  private canvas:HTMLCanvasElement;
  private gpu:WebGPURenderingContext;
  private commandQueue:WebGPUCommandQueue;
  private renderPipelineState:WebGPURenderPipelineState;
  private renderPassDescriptor:WebGPURenderPassDescriptor;

  private camera:Camera;
  private cameraController:RoundCameraController;
  private plane:Plane;
  private planeObject:SceneObject;
  private textureData:TextureData;
  private fragmentUniform:FragmentUniform;

  private time:number;

  constructor() {
    console.log(new Date());
    this.init();
  }

  private async init():Promise<void> {
    // Check whether WebGPU is enabled
    if ('WebMetalRenderingContext' in window) {
      WebMetalTranslator.useWebMetal = true;
    }
    else if ('WebGPURenderingContext' in window && 'WebGPULibrary' in window) {
      WebMetalTranslator.useWebMetal = false;
    }
    else {
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
    this.gpu = WebMetalTranslator.createWebGPURenderingContext(this.canvas);

    // Create WebGPUCommandQueue
    this.commandQueue = this.gpu.createCommandQueue();

    const isIPhone:boolean = /iP(hone|(o|a)d)/.test(navigator.userAgent);

    // Load metal shader file and create each WebGPUFunction to use for rendering and computing
    const shader:string = await fetch('shader/defaultShader.metal').then((response:Response) => response.text());
    const library:WebGPULibrary = this.gpu.createLibrary(shader);
    const vertexFunction:WebGPUFunction = library.functionWithName('vertex_main');
    const fragmentFunction:WebGPUFunction = library.functionWithName('fragment_main');

    if (!library || !vertexFunction || !fragmentFunction) {
      return;
    }

    // Create pipelineState for render
    const renderPipelineDescriptor:WebGPURenderPipelineDescriptor = WebMetalTranslator.createWebGPURenderPipelineDescriptor();
    renderPipelineDescriptor.vertexFunction = vertexFunction;
    renderPipelineDescriptor.fragmentFunction = fragmentFunction;
    renderPipelineDescriptor.colorAttachments[0].pixelFormat = WebGPUPixelFormat.BGRA8Unorm;
    this.renderPipelineState = this.gpu.createRenderPipelineState(renderPipelineDescriptor);

    // Create WebGPURenderPassDescriptor
    this.renderPassDescriptor = WebMetalTranslator.createWebGPURenderPassDescriptor();
    const colorAttachment0:WebGPURenderPassColorAttachmentDescriptor = this.renderPassDescriptor.colorAttachments[0];
    colorAttachment0.storeAction = WebGPUStoreAction.store;
    colorAttachment0.loadAction = WebGPULoadAction.clear;
    colorAttachment0.clearColor = [0.3, 0.6, 0.8, 1.0];

    // Initialize objects
    this.plane = new Plane();
    this.plane.createBuffer(this.gpu);

    this.textureData = await TextureData.createFromUrl('assets/texture.png');
    this.textureData.createBuffer(this.gpu);

    const obj:SceneObject = new SceneObject();
    obj.scaleX = obj.scaleY = obj.scaleZ = 50;
    obj.rotationX = -90 * Main.RAD;
    const vertexUniform:VertexUniform = new VertexUniform();
    vertexUniform.createBuffer(this.gpu);
    obj.vertexUniform = vertexUniform;
    this.planeObject = obj;

    this.fragmentUniform = new FragmentUniform();
    this.fragmentUniform.createBuffer(this.gpu);

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

  private render():void {
    this.stats.begin();

    this.time += 1;

    // Update camera
    this.cameraController.upDate(0.1);
    const cameraMatrix:mat4 = this.camera.getCameraMtx();

    // Prepare command
    const commandBuffer:WebGPUCommandBuffer = this.commandQueue.createCommandBuffer();
    const drawable:WebGPUDrawable = this.gpu.nextDrawable();
    this.renderPassDescriptor.colorAttachments[0].texture = drawable.texture;

    // Render plane
    const commandEncoder:WebGPURenderCommandEncoder = commandBuffer.createRenderCommandEncoderWithDescriptor(this.renderPassDescriptor);
    commandEncoder.setRenderPipelineState(this.renderPipelineState);
    commandEncoder.setVertexBuffer(this.plane.vertexBuffer, 0, 0);

    const obj:SceneObject = this.planeObject;
    const objMMatrix:mat4 = obj.getModelMtx();
    const objectMVPMatrix:mat4 = mat4.create();
    mat4.multiply(objectMVPMatrix, cameraMatrix, objMMatrix);

    const vertexUniform:VertexUniform = obj.vertexUniform as VertexUniform;
    vertexUniform.mvpMatrix = objectMVPMatrix;
    commandEncoder.setVertexBuffer(obj.vertexUniform.buffer, 0, 1);
    commandEncoder.setFragmentBuffer(this.textureData.uniform, 0, 0);
    commandEncoder.setFragmentBuffer(this.textureData.buffer, 0, 1);
    this.fragmentUniform.time = this.time / 100;
    commandEncoder.setFragmentBuffer(this.fragmentUniform.buffer, 0, 2);

    commandEncoder.drawPrimitives(WebGPUPrimitiveType.triangle, 0, this.plane.numVertices);
    commandEncoder.endEncoding();

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
