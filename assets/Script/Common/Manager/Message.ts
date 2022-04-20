import { _decorator, Component, Node, Enum } from 'cc'
const { ccclass, property } = _decorator

export class Message {
  // 类型
  Type: MessageTypeEnum
  // 命令
  Command: CommandEnum
  // 内容
  Content: any

  // 构造方法
  constructor(type: MessageTypeEnum, command: CommandEnum, content: any) {
    this.Type = type
    this.Command = command
    this.Content = content
  }
}

export enum MessageTypeEnum {
  Type_UI = 1,
  Type_NPC = 2,
  Type_Player = 3,
}

export enum CommandEnum {
  UI_REFRESH_HP = 101,

  Player_Left = 301,
  Player_Right = 302,
  Player_Stop = 303,
  Player_Jump = 304,
}