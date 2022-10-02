import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import reportWebVitals from './reportWebVitals'
import { sendToVercelAnalytics } from './vitals'

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals(sendToVercelAnalytics)
