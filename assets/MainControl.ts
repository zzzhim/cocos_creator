
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainControl')
export class MainControl extends Component {
  onLoad() {
    
  }

  start() {
    // [3]
  }

  update(dt: number) {
    const player = this.node.scene.getChildByPath('Canvas/main/player')
    const position = player.getPosition()

    this.node.setPosition(position.x - 960 / 2, position.y - 640 / 2)
  }
}
