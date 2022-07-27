import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import './style/index.css'
import App from './components/App'
import store from './store'

import './api/server'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
