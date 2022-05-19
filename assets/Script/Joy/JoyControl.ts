import { _decorator, Component, Node, UITransform, v3, Vec3, v2, Camera, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('JoyControl')
export class JoyControl extends Component {
    @property({ type: Camera })
    camera: Camera = null

    circular_r = 512 / 2
    parentWorldPosition = {
      top: [ 0, 0 ],
      right: [ 0, 0 ],
      bottom: [ 0, 0 ],
      left: [ 0, 0 ],
    }

    start() {


      this.node.on(Node.EventType.TOUCH_START, this._handleTouchStart, this)
      this.node.on(Node.EventType.TOUCH_MOVE, this._handleTouchMove, this)
      this.node.on(Node.EventType.TOUCH_END, this._handleTouchEnd, this)
    }

    getBgComponent() {
      const bg = this.node.getChildByName('bg')

      return bg
    }

    getBarComponent() {
      const bar = this.node.getChildByName('bar')

      return bar
    }

    getParentWorldPosition() {
      const bg = this.getBgComponent()
      const bgWorldPosition = bg.getWorldPosition()
      const { width, height } = bg.getComponent(UITransform)
      this.circular_r = width / 2
      // this.parentWorldPosition.top = [ bgWorldPosition.y, bgWorldPosition.y + height / 2 ]
      // this.parentWorldPosition.right = [ bgWorldPosition.x, bgWorldPosition.x + width / 2 ]
      // this.parentWorldPosition.bottom = [ bgWorldPosition.y, bgWorldPosition.y - width / 2 ]
      // this.parentWorldPosition.left = [ bgWorldPosition.x, bgWorldPosition.x - width / 2 ]

      return this.parentWorldPosition
    }

    _handleTouchStart(event) {
      const locationUi = event.getUILocation()
      const position = new Vec3(locationUi.x, locationUi.y)
      this.node.setWorldPosition(position)
      this.getParentWorldPosition()
    }

    _handleTouchMove(event) {
      const bar = this.getBarComponent()
      const locationUi = event.getUILocation()
      const pos = this.camera.convertToUINode(v3(locationUi.x, locationUi.y), this.node)
      const len = pos.mag()

      if(len > this.circular_r) {
        pos.x = this.circular_r * pos.x / len
        pos.y = this.circular_r * pos.y / len
      }

      // console.log(worldPosition)

      // const parentWorldPosition = this.parentWorldPosition
      // // 上
      // if(position.y > parentWorldPosition.top[0] && position.y < parentWorldPosition.top[1]) {
      //   worldPosition.y = position.y
      // }

      // // 右
      // if(position.x > parentWorldPosition.right[0] && position.x < parentWorldPosition.right[1]) {
      //   worldPosition.x = position.x
      // }

      // // 下
      // if(position.y < parentWorldPosition.bottom[0] && position.y > parentWorldPosition.bottom[1]) {
      //   worldPosition.y = position.y
      // }

      // // 左
      // if(position.x < parentWorldPosition.left[0] && position.x > parentWorldPosition.left[1]) {
      //   worldPosition.x = position.x
      // }

      bar.setPosition(pos)
    }

    _handleTouchEnd(event) {
      this.node.setPosition(0, 0)
      this.getBarComponent().setPosition(0, 0)
    }

    update(deltaTime: number) {
        
    }
}

