import { client } from '../../api/client'
import { todoAdded, todosLoaded, todosLoading } from './action-creators'

const fetchTodos = () => async dispatch => {
  dispatch(todosLoading())

  const { todos } = await client.get('/fakeApi/todos')

  return dispatch(todosLoaded(todos))
}

const postTodo = todoText => async dispatch => {
  const { todo } = await client.post('/fakeApi/todos', { text: todoText })
  return dispatch(todoAdded(todo))
}

export { fetchTodos, postTodo }
