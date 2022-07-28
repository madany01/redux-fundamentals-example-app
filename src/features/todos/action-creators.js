import TodosActions from './TodosActions'

const todosLoading = () => ({ type: TodosActions.todosLoading })

const todoAdded = todoText => ({ type: TodosActions.todoAdded, payload: todoText })

const todosLoaded = todos => ({ type: TodosActions.todosLoaded, payload: todos })

const todoDeleted = todoId => ({ type: TodosActions.todoDeleted, payload: todoId })

const todoToggled = todoId => ({ type: TodosActions.todoToggled, payload: todoId })

const todoColorChanged = (todoId, newColor) => ({
  type: TodosActions.colorChanged,
  payload: { id: todoId, color: newColor },
})

const todosAllCompleted = () => ({ type: TodosActions.allCompleted })

const todosCompletedCleared = () => ({ type: TodosActions.completedCleared })

export {
  todosLoading,
  todoAdded,
  todosLoaded,
  todoDeleted,
  todoToggled,
  todoColorChanged,
  todosAllCompleted,
  todosCompletedCleared,
}
