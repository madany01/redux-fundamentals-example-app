import { combineReducers } from 'redux'

import todosReducer from './features/todos/todosReducer'
import filtersReducer from './features/filters/filtersReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer
