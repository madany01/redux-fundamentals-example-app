import { createSelector } from '@reduxjs/toolkit'

import { FiltersStatus, selectFilters } from '../filters'
import todoAdapter from './adapter'

const selectTodosSlice = state => state.todos

const { selectAll: selectTodos, selectById: selectTodoById } =
  todoAdapter.getSelectors(selectTodosSlice)
const selectTodosLoadingStatus = state => selectTodosSlice(state).status

const selectRemainingTodosCount = state =>
  selectTodos(state).filter(({ completed }) => !completed).length

const selectTodosIds = createSelector(selectTodos, todos => todos.map(todo => todo.id))

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
