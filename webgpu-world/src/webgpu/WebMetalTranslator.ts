export class WebMetalTranslator {
  private static _useWebMetal:boolean;

  public static get useWebMetal():boolean {
    return WebMetalTranslator._useWebMetal;
  }

  public static set useWebMetal(value:boolean) {
    WebMetalTranslator._useWebMetal = value;
  }

  public static createWebGPURenderingContext(canvas:HTMLCanvasElement):WebGPURenderingContext {
    return WebMetalTranslator.useWebMetal ? canvas.getContext('webmetal') : canvas.getContext('webgpu');
  }

  public static createWebGPURenderPipelineDescriptor():WebGPURenderPipelineDescriptor {
    return WebMetalTranslator.useWebMetal ? new WebMetalRenderPipelineDescriptor() : new WebGPURenderPipelineDescriptor();
  }

  public static createWebGPUDepthStencilDescriptor():WebGPUDepthStencilDescriptor {
    return WebMetalTranslator.useWebMetal ? new WebMetalDepthStencilDescriptor() : new WebGPUDepthStencilDescriptor();
  }

  public static createWebGPURenderPassDescriptor():WebGPURenderPassDescriptor {
    return WebMetalTranslator.useWebMetal ? new WebMetalRenderPassDescriptor() : new WebGPURenderPassDescriptor();
  }

  public static createWebGPUTextureDescriptor(pixelFormat:WebGPUPixelFormat, width:number, height:number, mipmapped:boolean):WebGPUTextureDescriptor {
    return WebMetalTranslator.useWebMetal ? new WebMetalTextureDescriptor(pixelFormat, width, height, mipmapped) : new WebGPUTextureDescriptor(pixelFormat, width, height, mipmapped);
  }
}
