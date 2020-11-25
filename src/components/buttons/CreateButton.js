import React, { useState } from 'react'
import todoStore from '../../stores/todoStore'

const CreateButton = () => {
  const [todo, setTodo] = useState({ name: '', status: false, priority: '' })
  const handleChange = (e) =>
    setTodo({ ...todo, [e.target.name]: e.target.value })

  const handleSubmit = () => todoStore.createTodo(todo)
  return (
    <div>
      <input
        name='name'
        type='text'
        placeholder='enter name of the todo'
        onChange={handleChange}
      />{' '}
      <br />
      <select name='priority' onChange={handleChange}>
        <option value='high'>high</option>
        <option value='medium'>medium</option>
        <option value='low'>low</option>
      </select>
      <br />
      <button onClick={handleSubmit}>Create Todo</button>
    </div>
  )
}

export default CreateButton
