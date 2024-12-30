import React from 'react'
import ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LoginPage from './pages/Login.jsx'
import CobaCoba from './pages/coba.jsx'
import './assets/css/font.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <CobaCoba />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
