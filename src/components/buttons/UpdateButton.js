import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import todoStore from '../../stores/todoStore'

const UpdateButton = ({ todo }) => {
  const [todoField, setTodoField] = useState(todo)
  const handleChange = (e) => {
    setTodoField((todoField) => {
      const key = e.target.name
      const valueKey = key === 'status' ? 'checked' : 'value'
      return {
        ...todoField,
        [e.target.name]: e.target[valueKey],
      }
    })

    console.log('todo ', todoField)
    console.log('Field ', e.target.checked)
  }

  useEffect(() => {
    todoStore.updateTodo(todoField)
  }, [todoField])
  return (
    <div>
      <input
        name='status'
        type='checkbox'
        placeholder='enter status of the todo'
        onChange={handleChange}
        checked={todo.status}
      />
      <br />
      <select
        className='select-css'
        name='priority'
        value={todoField.priority}
        onChange={handleChange}>
        <option value='high'>❗️❗️❗️</option>
        <option value='medium'>❗️❗️</option>
        <option value='low'>❗️</option>
      </select>
    </div>
  )
}

export default observer(UpdateButton)
