import { makeAutoObservable } from 'mobx'
// import todos from "../todos";
import axios from 'axios'
import slugify from 'react-slugify'

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
    // newTodo.slug = slugify(newTodo.name)
    // newTodo.id = this.todos[this.todos.length - 1].id + 1
    // this.todos.push(newTodo)
    try {
      const response = await axios.post('http://localhost:8000/todos', newTodo)
      this.todos.push(response.data)
    } catch (error) {
      console.log('TodoStore -> createTodo -> error', error)
    }
  }
}
const todoStore = new TodoStore()
todoStore.fetchTodos()
export default todoStore
