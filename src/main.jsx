import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router/Router.jsx'
import AuthProvider from './Auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <section className='2xl:container mx-auto'>
        <RouterProvider router={router} />
      </section>
    </AuthProvider>
  </React.StrictMode>,
)
