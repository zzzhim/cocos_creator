import { _decorator, Component, Node, RigidBody2D, v2 } from 'cc';
import { FSMManager } from '../Common/FSMState/FSMManager';
import { FSMState } from '../Common/FSMState/FSMState';
const { ccclass, property } = _decorator;

@ccclass('LeftActionState')
export class LeftActionState extends FSMState {
  /**
   * 
   * @description 进入状态
   */
  onEnter() {
    
  }

  /**
   * 
   * @description 状态持续更新中
   */
  onUpdate() {
    super.onUpdate()
    const RigidBody = this.component.node.getComponent(RigidBody2D)
    const Velocity = RigidBody.linearVelocity
    RigidBody.linearVelocity = v2(-2, Velocity.y)
  }
}