import { useSelector, useDispatch } from 'react-redux'

import { ReactComponent as TimesSolid } from './times-solid.svg'

import { AvailableColors } from '../../features/filters'
import { selectTodoById, todosActions } from '../../features/todos'

function TodoListItem({ id }) {
  const { text, completed, color } = useSelector(state => selectTodoById(state, id))
  const dispatch = useDispatch()

  const handleCompletedChanged = () => dispatch(todosActions.todoToggled(id))

  const handleColorChanged = newColor =>
    dispatch(todosActions.todoColorChanged(id, newColor))

  const onDelete = () => dispatch(todosActions.todoDeleted(id))

  const colorOptions = AvailableColors.map(c => (
    <option key={c} value={c}>
      {c}
    </option>
  ))

  return (
    <li>
      <div className='view'>
        <div className='segment label'>
          <input
            className='toggle'
            type='checkbox'
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className='todo-text'>{text}</div>
        </div>
        <div className='segment buttons'>
          <select
            className='colorPicker'
            value={color}
            style={{ color }}
            onChange={e => handleColorChanged(e.target.value)}
          >
            <option value=''> </option>
            {colorOptions}
          </select>
          <button className='destroy' onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
