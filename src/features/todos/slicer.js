import { createSlice } from '@reduxjs/toolkit'

import LoadingStatus from './LoadingStatus'
import { fetchTodos, postTodo } from './thunks'
import todoAdapter from './adapter'

const initialState = todoAdapter.getInitialState({
  status: LoadingStatus.Idle,
  // ids: []
  // entities: {}
})

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoDeleted: todoAdapter.removeOne,
    todoToggled(state, { payload: todoId }) {
      state.entities[todoId].completed = !state.entities[todoId].completed
    },
    todoColorChanged: {
      prepare(todoId, newColor) {
        return {
          payload: { id: todoId, color: newColor },
        }
      },
      reducer(state, { payload: { id, color } }) {
        state.entities[id].color = color
      },
    },
    allTodosCompleted(state) {
      Object.values(state.entities).forEach(todo => (todo.completed = true))
    },
    completedTodosCleared(state) {
      const completedIds = state.ids.filter(id => state.entities[id].completed)
      return todoAdapter.removeMany(state, completedIds)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, state => {
        state.status = LoadingStatus.Loading
      })
      .addCase(fetchTodos.fulfilled, (state, { payload: todos }) => {
        state.status = LoadingStatus.Idle
        todoAdapter.setAll(state, todos)
      })
      .addCase(postTodo.fulfilled, (state, { payload: todo }) => {
        todoAdapter.addOne(state, todo)
      })
  },
})

const { reducer: todosReducer, actions: todosActions } = todosSlice

export { todosActions, todosReducer }
