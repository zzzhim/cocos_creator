
import { _decorator, Component, Node } from 'cc';
import { ComponentBase } from '../Script/Common/Manager/ComponentBase';
import { CommandEnum, Message, MessageTypeEnum } from '../Script/Common/Manager/Message';
import { MessageCenter } from '../Script/Common/Manager/MessageCenter';
import { HandleManager } from './HandleManager';
const { ccclass, property } = _decorator;

@ccclass('LeftControl')
export class LeftControl extends ComponentBase {
  onLoad() {
    this.node.on(Node.EventType.TOUCH_START, (event) => {
      this.PlayerActionLeft()
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
   * @description 向左行走
   */
  PlayerActionLeft() {
    MessageCenter.SendCustomMessage(MessageTypeEnum.Type_Player, CommandEnum.Player_Left, 10)
  }

  /**
   * 
   * @description 停止行走
   */
  PlayerActionStop() {
    MessageCenter.SendCustomMessage(MessageTypeEnum.Type_Player, CommandEnum.Player_Stop, 0)
  }
}

