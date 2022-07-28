import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postTodo } from '../features/todos'

function Header() {
  const [text, setText] = useState('')
  const [status, setStatus] = useState('idle')

  const dispatch = useDispatch()

  const handleKeyDown = async e => {
    const todoText = e.target.value.trim()

    if (!(e.key === 'Enter' && todoText)) return

    setStatus('loading')

    await dispatch(postTodo(todoText))

    setText('')
    setStatus('idle')
  }

  const handleChange = e => setText(e.target.value)

  const isLoading = status === 'loading'
  const placeholder = isLoading ? '' : 'What needs to be done?'
  const loader = isLoading ? <div className='loader' /> : null

  return (
    <header className='header'>
      <input
        className='new-todo'
        placeholder={placeholder}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />
      {loader}
    </header>
  )
}

export default Header
