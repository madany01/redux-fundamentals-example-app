import { combineReducers } from 'redux'

import { todosReducer } from './features/todos'
import { filtersReducer } from './features/filters'

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer
