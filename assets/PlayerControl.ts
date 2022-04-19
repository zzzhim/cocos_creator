
import { _decorator, Component, Node } from 'cc';
import { UIManager } from './UIManager';
import { MessageCenter } from './Manager/MessageCenter';
import { MessageTypeEnum } from './Manager/Message';
const { ccclass, property } = _decorator;

@ccclass('PlayerControl')
export class PlayerControl extends Component {
  start() {
    this.node.on(Node.EventType.MOUSE_DOWN, () => {
      MessageCenter.SendCustomMessage(MessageTypeEnum.Type_UI, MessageTypeEnum.UI_REFRESH_HP, 10)
    })
  }
}

