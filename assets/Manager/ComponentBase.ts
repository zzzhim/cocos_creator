
import { _decorator, Component, Node } from 'cc';
import { Message } from './Message';
const { ccclass, property } = _decorator;

@ccclass('ComponentBase')
export class ComponentBase extends Component {
  /**
   * 
   * @param {Message} msg
   * @description 接收消息
   */
  ReceiveMessage(message: Message) {
    
  }
}

