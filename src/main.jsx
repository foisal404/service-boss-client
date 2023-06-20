import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section className='2xl:container mx-auto'>
      <RouterProvider router={router} />
    </section>
  </React.StrictMode>,
)
