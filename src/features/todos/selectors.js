const selectTodos = state => state.todos

const selectRemainingTodos = state =>
  selectTodos(state).filter(({ completed }) => !completed)

const selectTodosIds = state => selectTodos(state).map(({ id }) => id)

const selectTodoById = (state, id) => selectTodos(state).find(todo => todo.id === id)

export { selectTodos, selectRemainingTodos, selectTodosIds, selectTodoById }
