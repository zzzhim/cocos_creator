
import { _decorator, Component, Node } from 'cc';
import { ManagerBase } from '../Script/Common/Manager/ManagerBase';
import { MessageTypeEnum } from '../Script/Common/Manager/Message';
const { ccclass, property } = _decorator;

@ccclass('HandleManager')
export class HandleManager extends ManagerBase {
  static instance: HandleManager

  static getInstance() {
    return HandleManager.instance
  }

  onLoad() {
    super.onLoad()
    HandleManager.instance = this
  }

  SetMessageType() {
    return MessageTypeEnum.Type_UI
  }
}

