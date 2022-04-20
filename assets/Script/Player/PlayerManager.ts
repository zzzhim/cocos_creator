
import { _decorator, Component, Node } from 'cc';
import { ManagerBase } from '../Common/Manager/ManagerBase';
import { MessageTypeEnum } from '../Common/Manager/Message';
const { ccclass, property } = _decorator;

@ccclass('PlayerManager')
export class PlayerManager extends ManagerBase {
  static instance: PlayerManager

  static getInstance() {
    return PlayerManager.instance
  }

  onLoad() {
    super.onLoad()
    PlayerManager.instance = this
  }

  SetMessageType() {
    return MessageTypeEnum.Type_Player
  }
}

