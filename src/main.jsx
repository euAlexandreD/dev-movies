import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Routes/Router'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>,
)
