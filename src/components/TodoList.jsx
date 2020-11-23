import React from 'react'
import todoStore from '../stores/todoStore'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todoList = todoStore.todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ))

  return <div>{todoList}</div>
}

export default TodoList
