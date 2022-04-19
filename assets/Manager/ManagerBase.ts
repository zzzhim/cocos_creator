
import { _decorator, Component, Node } from 'cc'
import { ComponentBase } from './ComponentBase'
import { Message, MessageTypeEnum } from './Message'
import { MessageCenter } from './MessageCenter'
const { ccclass, property } = _decorator

@ccclass('ManagerBase')
export class ManagerBase extends ComponentBase {
  // 管理的消息接收者数组
  ReceiveList: ComponentBase[] = []

  // 当前管理类接收的具体类型
  MessageType: MessageTypeEnum

  onLoad() {
    // 设置当前管理类接受的消息类型
    this.MessageType = this.SetMessageType()
    // 把管理类添加到消息中心列表中
    MessageCenter.Manager.push(this)
  }

  /**
   * 
   * @description 设置当前管理类的消息类型
   */
  SetMessageType() {
    return MessageTypeEnum.Type_UI
  }

  /**
   * @param {ComponentBase} componentBase
   * @description 注册消息监听
  */
  RegisterReceiver(componentBase: ComponentBase) {
    this.ReceiveList.push(componentBase)
  }

  /**
   * 
   * @param {Message} message
   * @description 接收消息
   */
  ReceiveMessage(message: Message) {
    super.ReceiveMessage(message)
    // 判断消息类型
    if(message.Type !== this.MessageType) {
      return 
    }

    // 分发消息
    this.ReceiveList.forEach(componentBase => {
      componentBase.ReceiveMessage(message)
    })
  }
}
