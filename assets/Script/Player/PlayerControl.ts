
import { _decorator, Component, Node, CameraComponent, Camera, RigidBody2D, v2 } from 'cc';
import { MessageCenter } from '../Common/Manager/MessageCenter';
import { CommandEnum, Message, MessageTypeEnum } from '../Common/Manager/Message';
import { LeftActionState } from './LeftActionState';
import { FSMManager } from '../Common/FSMState/FSMManager';
import { ComponentBase } from '../Common/Manager/ComponentBase';
import { PlayerManager } from './PlayerManager';
import { RightActionState } from './RightActionState';
import { JumpActionState } from './JumpActionState';
const { ccclass, property } = _decorator;

enum PlayerFSM {
  StopActionState = -1,
  LeftActionState = 2,
  RightActionState,
  JumpActionState,
}

@ccclass('PlayerControl')
export class PlayerControl extends ComponentBase {
  fsmManager: FSMManager

  onLoad() {
    // const camera = this.node.getComponent(Camera)
    // const camera = this.node.getChildByName('Camera')



    PlayerManager.getInstance().RegisterReceiver(this)
    // 初始化玩家状态机
    this.fsmManager = new FSMManager()
    const leftActionState = new LeftActionState(PlayerFSM.LeftActionState, this, this.fsmManager)
    const rightActionState = new RightActionState(PlayerFSM.RightActionState, this, this.fsmManager)
    const jumpActionState = new JumpActionState(PlayerFSM.JumpActionState, this, this.fsmManager)
    this.fsmManager.stateList = [ jumpActionState, leftActionState, rightActionState ]
  }

  start() {
    // this.node.on(Node.EventType.MOUSE_DOWN, () => {
    //   this.RefreshHp()
    // })
  }

  update(dt: number) {
    if(this.fsmManager.CurrentIndex !== -1) {
      this.fsmManager.onUpdate()
    }

    // const camera = this.node.scene.getChildByName('Canvas').getChildByName('Camera')

    // // console.log(camera)
    // camera.position.set(this.node.position.x, this.node.position.y,)
  }

  /**
   * @param {Message} msg
   * @description 接收消息
   */
  ReceiveMessage(msg: Message) {
    if(msg.Type === MessageTypeEnum.Type_Player) {

      // 停止行走
      if(msg.Command === CommandEnum.Player_Stop) {
        this.fsmManager.changeState(PlayerFSM.StopActionState)
      }

      // 跳跃
      if(msg.Command === CommandEnum.Player_Jump) {
        console.log('Player_Jump')
        // this.fsmManager.changeState(PlayerFSM.JumpActionState)
        this.jumpAction()
      }

      // 向左行走
      if(msg.Command === CommandEnum.Player_Left) {
        console.log('Player_Left')
        this.fsmManager.changeState(PlayerFSM.LeftActionState)
      }

      // 向右行走
      if(msg.Command === CommandEnum.Player_Right) {
        console.log('Player_Right')
        this.fsmManager.changeState(PlayerFSM.RightActionState)
      }
    }
  }

  /**
   * 
   * @description 跳跃
   */
  jumpAction() {
    const RigidBody = this.node.getComponent(RigidBody2D)
    const Velocity = RigidBody.linearVelocity
    RigidBody.linearVelocity = v2(Velocity.x, 10)
  }

  /**
   * 
   * @description 人物行走
   */
  handleAction() {

  }

  /**
   * 
   * @description 刷新血量
   */
  RefreshHp() {
    MessageCenter.SendCustomMessage(MessageTypeEnum.Type_UI, CommandEnum.UI_REFRESH_HP, 10)
  }
}

