import React from 'react'

const TodoItem = ({ todo }) => {
  return (
    <div>
      <li>
        Name: {todo.name} - Status: {todo.status} - Priority: {todo.priority}
      </li>
    </div>
  )
}

export default TodoItem
