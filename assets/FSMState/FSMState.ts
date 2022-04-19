import { _decorator, Component, Node } from 'cc';
import { FSMManager } from './FSMManager';
const { ccclass, property } = _decorator;

@ccclass('FSMState')
export class FSMState {
  // 当前状态ID
  StateId: number
  // 状态拥有者
  component: Component
  // 所属状态机
  fsmManager: FSMManager
  
  constructor(StateId: number, component: Component, fsmManager: FSMManager) {
    this.StateId = StateId
    this.component = component
    this.fsmManager = fsmManager
  }

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

  }
}