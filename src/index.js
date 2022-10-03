import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import reportWebVitals from './reportWebVitals'
import { sendToVercelAnalytics } from './vitals'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')

const root = createRoot(container)

root.render(<Home tab='home' />)

// ReactDOM.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

reportWebVitals(sendToVercelAnalytics)
