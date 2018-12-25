declare interface HTMLCanvasElement {
  getContext(contextId:'webmetal'):WebGPURenderingContext | null;
}

declare class WebMetalRenderPipelineDescriptor extends WebGPURenderPipelineDescriptor {
}

declare class WebMetalDepthStencilDescriptor extends WebGPUDepthStencilDescriptor {
}

declare class WebMetalRenderPassDescriptor extends WebGPURenderPassDescriptor {
}

declare class WebMetalTextureDescriptor extends WebGPUTextureDescriptor {
}