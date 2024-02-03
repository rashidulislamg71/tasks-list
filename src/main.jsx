
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import myRouters from './router/router.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <RouterProvider router={myRouters} /> */}
      <App />
  </React.StrictMode>,
)
