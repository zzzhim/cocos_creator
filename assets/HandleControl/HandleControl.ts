
import { _decorator, Component, Node, System, view, v3, screen } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HandleControl')
export class HandleControl extends Component {

  start() {
    console.log(screen.windowSize)
    console.log(screen.devicePixelRatio)
    console.log(screen.windowSize.width / screen.devicePixelRatio)
    console.log(screen.windowSize.height / screen.devicePixelRatio)
  }

  update (deltaTime: number) {
    const player = this.node.scene.getChildByPath('Canvas/player')
    const position = player.getPosition()
    const page = screen.windowSize
    // const width = page.width / screen.devicePixelRatio
    const height = page.height / screen.devicePixelRatio
    this.node.setPosition(v3(position.x, position.y - (height / 2)))
  }
}
