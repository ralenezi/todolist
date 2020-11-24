import { observer } from 'mobx-react'
import React from 'react'
import todoStore from '../../stores/todoStore'

const UpdateButton = ({ todo }) => {
  const handleChange = () => {
    todoStore.updateTodo(todo.id)
    console.log(todo.status)
  }
  return (
    <div>
      <input
        name='status'
        type='checkbox'
        placeholder='enter status of the todo'
        onChange={handleChange}
        checked={todo.status}
      />
    </div>
  )
}

export default observer(UpdateButton)
