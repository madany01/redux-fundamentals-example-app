import { client } from '../../api/client'
import TodosActions from './TodosActions'

async function fetchTodos(dispatch) {
  const { todos } = await client.get('/fakeApi/todos')

  dispatch({ type: TodosActions.todosLoaded, payload: todos })
}

const postTodo = todoText => async dispatch => {
  const { todo } = await client.post('/fakeApi/todos', { text: todoText })
  dispatch({ type: TodosActions.todoAdded, payload: todo })
}

export { fetchTodos, postTodo }
