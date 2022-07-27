import TodosActions from './TodosActions'

const initialState = []

function nextTodoId(todos) {
  return 1 + todos.reduce((maxId, { id }) => Math.max(maxId, id), -1)
}

// eslint-disable-next-line default-param-last
function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TodosActions.todosLoaded:
      return action.payload

    case TodosActions.todoAdded:
      return [...state, action.payload]

    case TodosActions.todoToggled:
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })

    case TodosActions.colorChanged: {
      const { color, id } = action.payload

      return state.map(todo => {
        if (todo.id !== id) {
          return todo
        }

        return {
          ...todo,
          color,
        }
      })
    }

    case TodosActions.todoDeleted:
      return state.filter(todo => todo.id !== action.payload)

    case TodosActions.allCompleted:
      return state.map(todo => {
        return { ...todo, completed: true }
      })

    case TodosActions.completedCleared:
      return state.filter(todo => !todo.completed)

    default:
      return state
  }
}

export default todosReducer
