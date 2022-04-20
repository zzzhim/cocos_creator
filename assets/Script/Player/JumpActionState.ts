import { _decorator, RigidBody2D, v2 } from 'cc';
import { FSMState } from '../Common/FSMState/FSMState';
const { ccclass, property } = _decorator;

@ccclass('JumpActionState')
export class JumpActionState extends FSMState {
  /**
   * 
   * @description 进入状态
   */
  onEnter() {
    super.onEnter()
    console.log('跳跃')
    const RigidBody = this.component.node.getComponent(RigidBody2D)
    const Velocity = RigidBody.linearVelocity
    RigidBody.linearVelocity = v2(Velocity.x, 10)
  }

  /**
   * 
   * @description 状态持续更新中
   */
  onUpdate() {
    super.onUpdate()
  }
}