import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import './style/index.css'
import App from './components/App'
import store from './store'

import './api/server'

const root = ReactDOM.createRoot(document.getElementById('root'))
const strict = true

const components = (
  <Provider store={store}>
    <App />
  </Provider>
)
root.render(strict ? <React.StrictMode>{components}</React.StrictMode> : components)
