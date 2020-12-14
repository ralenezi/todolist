import { makeAutoObservable } from 'mobx'
import axios from 'axios'

class TodoStore {
  todos = []

  constructor() {
    makeAutoObservable(this)
  }
  fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/todos')
      this.todos = response.data
    } catch (error) {
      console.error('todoStore -> fetchTodos -> error', error)
    }
  }
  createTodo = async (newTodo) => {
    try {
      const response = await axios.post('http://localhost:8000/todos', newTodo)
      this.todos.push(response.data)
    } catch (error) {
      console.log('TodoStore -> createTodo -> error', error)
    }
  }
  deleteTodo = async (todoId) => {
    try {
      await axios.delete(`http://localhost:8000/todos/${todoId}`)
      this.todos = this.todos.filter((todo) => todo.id !== todoId)
    } catch (error) {}
  }

  updateTodo = async (updatedTodo) => {
    try {
      await axios.put(
        `http://localhost:8000/todos/${updatedTodo.id}`,
        updatedTodo
      )
      const todo = this.todos.find((todo) => todo.id === updatedTodo.id)
      todo.status = !todo.status
      for (const key in todo) todo[key] = updatedTodo[key]
    } catch (error) {
      console.log('TodoStore -> updatedTodo -> error', error)
    }
  }
}
const todoStore = new TodoStore()
todoStore.fetchTodos()
export default todoStore
