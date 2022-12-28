import React from 'react'
import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
