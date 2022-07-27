import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchTodos, selectTodosIds, TodosActions } from '../features/todos'

import TodoListItem from './TodoListItem'

function TodoList() {
  const dispatch = useDispatch()
  const todosIds = useSelector(selectTodosIds, shallowEqual)

  useEffect(() => {
    dispatch(fetchTodos)
  }, [])

  const renderedListItems = todosIds.map(id => <TodoListItem key={id} id={id} />)

  return <ul className='todo-list'>{renderedListItems}</ul>
}

export default TodoList
