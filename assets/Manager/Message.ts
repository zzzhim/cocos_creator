import { _decorator, Component, Node, Enum } from 'cc'
const { ccclass, property } = _decorator

export class Message {
  // 类型
  Type: MessageTypeEnum
  // 命令
  Command: number
  // 内容
  Content: any

  // 构造方法
  constructor(type: MessageTypeEnum, command: number, content: any) {
    this.Type = type
    this.Command = command
    this.Content = content
  }
}

export enum MessageTypeEnum {
  Type_UI = 1,
  Type_NPC = 2,

  UI_REFRESH_HP = 101,

  NPC_TIEJIANG = 301
}