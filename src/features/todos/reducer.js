import TodosActions from './TodosActions'
import LoadingStatus from './LoadingStatus'

const initialState = {
  status: LoadingStatus.Idle,
  entities: {},
}

// eslint-disable-next-line default-param-last
function todosReducer(state = initialState, { type, payload }) {
  switch (type) {
    case TodosActions.todosLoading: {
      return { ...state, status: LoadingStatus.Loading }
    }

    case TodosActions.todosLoaded: {
      const todos = payload

      return {
        ...state,
        status: LoadingStatus.Idle,
        entities: Object.fromEntries(todos.map(todo => [todo.id, todo])),
      }
    }

    case TodosActions.todoAdded: {
      const todo = payload

      return {
        ...state,
        entities: { ...state.entities, [todo.id]: todo },
      }
    }

    case TodosActions.todoToggled: {
      const id = payload

      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: {
            ...state.entities[id],
            completed: !state.entities[id].completed,
          },
        },
      }
    }

    case TodosActions.colorChanged: {
      const { color, id } = payload

      return {
        ...state,
        entities: { ...state.entities, [id]: { ...state.entities[id], color } },
      }
    }

    case TodosActions.todoDeleted: {
      const id = payload
      const { [id]: _, ...restEntities } = state.entities
      return { ...state, entities: restEntities }
    }

    case TodosActions.allCompleted: {
      return {
        ...state,
        entities: Object.fromEntries(
          Object.entries(state.entities).map(([id, todo]) => [
            id,
            { ...todo, completed: true },
          ])
        ),
      }
    }

    case TodosActions.completedCleared: {
      return {
        ...state,
        entities: Object.fromEntries(
          Object.entries(state.entities).filter(([, todo]) => !todo.completed)
        ),
      }
    }

    default: {
      return state
    }
  }
}

export default todosReducer
