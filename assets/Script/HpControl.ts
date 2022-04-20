
import { _decorator, Component, Node, UI } from 'cc';
import { ComponentBase } from './Common/Manager/ComponentBase';
import { Message, MessageTypeEnum } from './Common/Manager/Message';
// import { UIManager } from '../HandleControl/HandleManager';
const { ccclass, property } = _decorator;

@ccclass('HpControl')
export class HpControl extends ComponentBase {
  hp: number = 100

  onLoad() {
    // UIManager.instance.RegisterReceiver(this)
  }

  start() {}

  ReceiveMessage(msg: Message) {
    if(msg.Type === MessageTypeEnum.Type_UI) {

      // if(msg.Command === MessageTypeEnum.UI_REFRESH_HP) {
      //   this.ChangeHp(msg.Content)
      // }
    }
  }

  // 改变血量
  ChangeHp(attack) {
    this.hp -= attack

    console.log(this.hp)
  }
}

