export class TextureData {
  private static canvas:HTMLCanvasElement;
  private static context:CanvasRenderingContext2D;

  public imageData:ImageData;
  public uniform:WebGPUBuffer;
  public buffer:WebGPUBuffer;

  constructor() {

  }

  public createBuffer(gpu:WebGPURenderingContext):void {
    this.uniform = gpu.createBuffer(new Uint32Array([this.imageData.width, this.imageData.height]));
    this.buffer = gpu.createBuffer(this.imageData.data);
  }

  public static createFromUrl(url:string):Promise<TextureData> {
    if (!TextureData.canvas) {
      TextureData.canvas = document.createElement('canvas') as HTMLCanvasElement;
      TextureData.context = TextureData.canvas.getContext('2d');
    }

    return new Promise((resolve:Function):void => {
      const image:HTMLImageElement = new Image();
      image.src = url;
      image.onload = function ():void {
        TextureData.canvas.width = image.width;
        TextureData.canvas.height = image.height;
        TextureData.context.drawImage(image, 0, 0);

        const data:TextureData = new TextureData();
        data.imageData = TextureData.context.getImageData(0, 0, image.width, image.height);
        resolve(data);
      };
    });
  }
}