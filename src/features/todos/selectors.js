import { createSelector } from 'reselect'
import { FiltersStatus, selectFilters } from '../filters'

const selectTodos = createSelector(
  state => state.todos.entities,
  todosObj => Object.values(todosObj)
)
const selectTodosLoadingStatus = state => state.todos.status

const selectRemainingTodosCount = state =>
  selectTodos(state).filter(({ completed }) => !completed).length

const selectTodosIds = createSelector(selectTodos, todos => todos.map(todo => todo.id))

const selectTodoById = id => state => state.todos.entities[id]

const selectFilteredTodos = createSelector(
  selectTodos,
  selectFilters,
  (todos, { status, colors }) =>
    todos.filter(
      todo =>
        (status === FiltersStatus.All ||
          (status === FiltersStatus.Completed && todo.completed) ||
          (status === FiltersStatus.Remaining && !todo.completed)) &&
        (colors.length === 0 || colors.includes(todo.color))
    )
)

const selectFilteredTodosIds = createSelector(selectFilteredTodos, todos =>
  todos.map(todo => todo.id)
)

export {
  selectTodos,
  selectTodosLoadingStatus,
  selectRemainingTodosCount,
  selectTodosIds,
  selectTodoById,
  selectFilteredTodosIds,
}
