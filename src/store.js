import { configureStore } from '@reduxjs/toolkit'

import { todosReducer } from './features/todos'
import { filtersReducer } from './features/filters'

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
})

export default store
