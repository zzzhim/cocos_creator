
import { _decorator, Component, Node } from 'cc';
import { ManagerBase } from './Manager/ManagerBase';
import { MessageTypeEnum } from './Manager/Message';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends ManagerBase {
  static instance: UIManager

  onLoad() {
    super.onLoad()
    UIManager.instance = this
  }

  SetMessageType() {
    return MessageTypeEnum.Type_UI
  }
}

