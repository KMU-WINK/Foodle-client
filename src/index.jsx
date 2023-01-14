import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './static/styles/GlobalStyle'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <App />
  </>,
)
