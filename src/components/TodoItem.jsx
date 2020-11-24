import { observer } from 'mobx-react'
import React from 'react'
import DeleteButton from './buttons/DeleteButton'
import UpdateButton from './buttons/UpdateButton'

const TodoItem = ({ todo }) => {
  return (
    <div>
      <li>
        Name: {todo.name} - Status: {todo.status ? 'done' : ' not done'} -
        Priority: {todo.priority}
      </li>
      <DeleteButton todoId={todo.id} />
      <UpdateButton todo={todo} />
    </div>
  )
}

export default observer(TodoItem)
