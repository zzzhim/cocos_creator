
import { _decorator, Component, Node } from 'cc';
import { ComponentBase } from '../Script/Common/Manager/ComponentBase';
import { CommandEnum, MessageTypeEnum } from '../Script/Common/Manager/Message';
import { MessageCenter } from '../Script/Common/Manager/MessageCenter';
const { ccclass, property } = _decorator;

@ccclass('JumpControl')
export class JumpControl extends ComponentBase {

  start() {
    this.node.on(Node.EventType.TOUCH_START, (event) => {
      this.PlayerActionJump()
    })
  }

  /**
   * 
   * @description 跳跃
   */
  PlayerActionJump() {
    MessageCenter.SendCustomMessage(MessageTypeEnum.Type_Player, CommandEnum.Player_Jump, 10)
  }
}
