import { useSelector, useDispatch } from 'react-redux'

import {
  FiltersStatus,
  AvailableColors,
  selectFilters,
  filterColorToggled,
  filterStatusChanged,
} from '../features/filters'
import {
  selectRemainingTodosCount,
  todosAllCompleted,
  todosCompletedCleared,
} from '../features/todos'

function RemainingTodos({ count }) {
  const suffix = count === 1 ? '' : 's'

  return (
    <div className='todo-count'>
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  )
}

function StatusFilter({ value: status, onChange }) {
  const renderedFilters = Object.keys(FiltersStatus).map(key => {
    const value = FiltersStatus[key]
    const handleClick = () => onChange(value)
    const className = value === status ? 'selected' : ''

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    )
  })

  return (
    <div className='filters statusFilters'>
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  )
}

function ColorFilters({ value: colors, onChange }) {
  const renderedColors = AvailableColors.map(color => {
    const checked = colors.includes(color)
    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added'
      onChange(color, changeType)
    }

    return (
      <label key={color}>
        <input type='checkbox' name={color} checked={checked} onChange={handleChange} />
        <span
          className='color-block'
          style={{
            backgroundColor: color,
          }}
        />
        {color}
      </label>
    )
  })

  return (
    <div className='filters colorFilters'>
      <h5>Filter by Color</h5>
      <form className='colorSelection'>{renderedColors}</form>
    </div>
  )
}

function Footer() {
  const { colors, status } = useSelector(selectFilters)
  const todosRemaining = useSelector(selectRemainingTodosCount)

  const dispatch = useDispatch()

  const onColorChange = color => dispatch(filterColorToggled(color))

  const onStatusChange = newStatus => dispatch(filterStatusChanged(newStatus))

  const onMarkCompletedClicked = () => dispatch(todosAllCompleted())

  const onClearCompletedClicked = () => dispatch(todosCompletedCleared())

  return (
    <footer className='footer'>
      <div className='actions'>
        <h5>Actions</h5>
        <button className='button' onClick={onMarkCompletedClicked}>
          Mark All Completed
        </button>
        <button className='button' onClick={onClearCompletedClicked}>
          Clear Completed
        </button>
      </div>

      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  )
}

export default Footer
