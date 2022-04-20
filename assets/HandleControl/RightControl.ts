
import { _decorator, Component, Node } from 'cc';
import { ComponentBase } from '../Script/Common/Manager/ComponentBase';
import { CommandEnum, MessageTypeEnum } from '../Script/Common/Manager/Message';
import { MessageCenter } from '../Script/Common/Manager/MessageCenter';
const { ccclass, property } = _decorator;

@ccclass('RightControl')
export class RightControl extends ComponentBase {

  start() {
    this.node.on(Node.EventType.TOUCH_START, (event) => {
      this.PlayerActionRight()
    })

    this.node.on(Node.EventType.TOUCH_END, (event) => {
      this.PlayerActionStop()
    })

    // this.node.on(Node.EventType.TOUCH_CANCEL, (event) => {
    //   this.PlayerActionStop()
    // })
  }

  /**
   * 
   * @description 向右行走
   */
  PlayerActionRight() {
    MessageCenter.SendCustomMessage(MessageTypeEnum.Type_Player, CommandEnum.Player_Right, 10)
  }

  /**
   * 
   * @description 停止行走
   */
  PlayerActionStop() {
    MessageCenter.SendCustomMessage(MessageTypeEnum.Type_Player, CommandEnum.Player_Stop, 0)
  }
}
