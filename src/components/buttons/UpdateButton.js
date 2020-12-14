import { observer } from 'mobx-react'
import todoStore from '../../stores/todoStore'

const UpdateButton = ({ todo }) => {
  const handleChange = (e) => {
    const valueKey = e.target.name === 'status' ? 'checked' : 'value'
    todo = { ...todo, [e.target.name]: e.target[valueKey] }
    todoStore.updateTodo(todo)
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
      <br />
      <select
        className='select-css'
        name='priority'
        value={todo.priority}
        onChange={handleChange}
        onBlur={() => todoStore.updateTodo(todo)}>
        <option value='high'>❗️❗️❗️</option>
        <option value='medium'>❗️❗️</option>
        <option value='low'>❗️</option>
      </select>
    </div>
  )
}

export default observer(UpdateButton)
