import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TodosActions } from '../features/todos'

function Header() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleKeyDown = e => {
    const todoText = e.target.value.trim()

    if (!(e.key === 'Enter' && todoText)) return
    dispatch({ type: TodosActions.todoAdded, payload: todoText })

    setText('')
  }

  const handleChange = e => setText(e.target.value)

  return (
    <header className='header'>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  )
}

export default Header
