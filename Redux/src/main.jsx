import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createStore } from 'Redux'
// import * as serviceWorker from './serviceWorker'
import { composeWidthDevTools } from 'redux-devtools-extension'
import rootReducer from './modules/index.js'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, composeWidthDevTools())
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
