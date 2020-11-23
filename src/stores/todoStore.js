import { makeAutoObservable } from 'mobx'
import todos from '../todos'
class TodoStore {
  todos = todos

  constructor() {
    makeAutoObservable(this)
  }
}
const todoStore = new TodoStore()
export default todoStore
