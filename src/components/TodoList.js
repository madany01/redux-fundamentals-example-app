import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  fetchTodos,
  selectFilteredTodosIds,
  selectTodosLoadingStatus,
  TodosLoadingStatus,
} from '../features/todos'
import TodoListItem from './TodoListItem'

function TodoList() {
  const dispatch = useDispatch()

  const todosIds = useSelector(selectFilteredTodosIds)
  const loadingStatus = useSelector(selectTodosLoadingStatus)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  const renderedListItems = todosIds.map(id => <TodoListItem key={id} id={id} />)

  return (
    (loadingStatus === TodosLoadingStatus.Loading && (
      <div className='todo-list'>
        <div className='loader' />
      </div>
    )) || <ul className='todo-list'>{renderedListItems}</ul>
  )
}

export default TodoList
