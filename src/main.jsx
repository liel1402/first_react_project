import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap the app with BrouserRouter to enable dynamic routing between the pages */}
      <App /> 
    </BrowserRouter>
  </React.StrictMode>,
)
