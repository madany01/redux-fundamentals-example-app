import { useSelector, shallowEqual } from 'react-redux'
import { selectTodosIds } from '../features/todos'

import TodoListItem from './TodoListItem'

function TodoList() {
  const todosIds = useSelector(selectTodosIds, shallowEqual)

  const renderedListItems = todosIds.map(id => <TodoListItem key={id} id={id} />)

  return <ul className='todo-list'>{renderedListItems}</ul>
}

export default TodoList
