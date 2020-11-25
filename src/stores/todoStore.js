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
      await this.fetchTodos()
      // const todo = this.todos.find((todo) => todo.id === updatedTodo.id)
      // todo.status = !todo.status
      // for (const key in todo) todo[key] = updatedTodo[key]
    } catch (error) {
      console.log('TodoStore -> updatedTodo -> error', error)
    }
  }

  //

  // updateItem = async (updatedItem) => {
  //   try {
  //     await axios.put(
  //       `http://localhost:8000/items/${updatedItem.id}`,
  //       updatedItem
  //     )
  //     const item = this.items.find((item) => item.id === updatedItem.id)
  //     for (const key in item) item[key] = updatedItem[key]
  //     item.slug = slugify(item.name)
  //   } catch (error) {
  //     console.error(
  //       '🚀 ~ file: itemStore.js ~ line 55 ~ ItemStore ~ updateItem= ~ error',
  //       error
  //     )
  //   }
  //   console.log('ItemStore -> updateItem -> updatedItem', updatedItem)
  // }
  //
}
const todoStore = new TodoStore()
todoStore.fetchTodos()
export default todoStore
