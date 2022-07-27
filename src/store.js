import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

import reducer from './reducer'

const initialState = {
  todos: [
    { id: 0, text: 'js', completed: false, color: 'blue' },
    { id: 1, text: 'py', completed: true, color: 'red' },
    { id: 2, text: 'ts', completed: true },
  ],
}

const store = createStore(reducer, initialState, composeWithDevTools())

export default store
