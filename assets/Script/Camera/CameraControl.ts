
import { _decorator, Component, Node, Camera, v3 } from 'cc';
import { ComponentBase } from '../Common/Manager/ComponentBase';
const { ccclass, property } = _decorator;

@ccclass('CameraControl')
export class CameraControl extends ComponentBase {
  start() {
    const camera = this.node.getComponent(Camera)

    console.log(camera.rect)
  }

  update (deltaTime: number) {
    const player = this.node.scene.getChildByPath('Canvas/player')
    const position = player.getPosition()
    this.node.setPosition(position.x, position.y)
  }
}

