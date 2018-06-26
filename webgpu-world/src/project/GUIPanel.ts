import {GUI} from 'dat-gui';

export class GUIPanel {
  public num:number;
  public useModel:boolean;

  constructor() {
    this.num = 1000;
    this.useModel = true;
  }

  public setGUITitle(gui:GUI, propertyName:string, title:string):void {
    let propertyList:NodeListOf<Element> = gui.domElement.getElementsByClassName('property-name');
    let length:number = propertyList.length;
    for (let i:number = 0; i < length; i++) {
      let element:Element = propertyList[i];
      if (element.innerHTML === propertyName) {
        element.innerHTML = title;
      }
    }
  }
}
