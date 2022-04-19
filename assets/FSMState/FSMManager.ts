
import { _decorator, Component, Node } from 'cc';
import { FSMState } from './FSMState';
const { ccclass, property } = _decorator;

@ccclass('FSMManager')
export class FSMManager {
  // 状态列表
  stateList: FSMState[] = []

  // 当前状态
  CurrentIndex: number = -1

  /**
   * 
   * @description 改变状态
   */
  changeState(StateId: number) {
    this.CurrentIndex = StateId

    if(this.CurrentIndex !== -1) {
      // 调用新状态的 onEnter 方法
      this.stateList[this.CurrentIndex].onEnter()
    }
  }

  // 更新调用
  onUpdate() {
    if(this.CurrentIndex !== -1) {
      // 调用当前状态的 onUpdate 方法
      this.stateList[this.CurrentIndex].onUpdate()
    }
  }
}