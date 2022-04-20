
import { _decorator, Component, Node } from 'cc';
import { ComponentBase } from './ComponentBase';
import { Message, MessageTypeEnum } from './Message';
const { ccclass, property } = _decorator;

@ccclass('MessageCenter')
export class MessageCenter {
  // 管理类列表
  static Manager: ComponentBase[] = []

  /**
   * 
   * @param {Message} msg
   * @description 发送消息
   */
  static SendMessage(msg: Message) {
    this.Manager.forEach(componentBase => {
      componentBase.ReceiveMessage(msg)
    })
  }

  /**
   * 
   * @param {MessageTypeEnum} type
   * @param {number} command
   * @param {any} content
   * @description 发送消息
   */
  static SendCustomMessage(type: MessageTypeEnum, command, content: any) {
    const msg = new Message(type, command, content)

    this.SendMessage(msg)
  }
}

