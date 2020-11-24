import React, { useState } from 'react'
import todoStore from '../../stores/todoStore'
const CreateButton = () => {
  const [todo, setTodo] = useState({ name: '', status: '', priority: '' })
  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value })
  }
  console.log('test ', todo)

  const handleSubmit = (e) => {
    // e.preventDefault()
    todoStore.createTodo(todo)
  }
  return (
    <div>
      <input
        name='name'
        type='text'
        placeholder='enter name of the todo'
        onChange={handleChange}
      />{' '}
      <br />
      <input
        name='status'
        type='text'
        placeholder='enter status of the todo'
        onChange={handleChange}
      />{' '}
      <br />
      <input
        name='priority'
        type='text'
        placeholder='enter priority of the todo'
        onChange={handleChange}
      />{' '}
      <br />
      <button onClick={handleSubmit}>Create Todo</button>
    </div>
  )
}

export default CreateButton
