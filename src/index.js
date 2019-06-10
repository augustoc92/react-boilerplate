import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@babel/polyfill'
import './styles.css'
import DefaultErrorBoundary from './DefaultErrorBoundary'

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
