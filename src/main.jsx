import React from 'react'
import ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './assets/css/font.css'
import Home from './pages/Home.jsx'
import LoginPages from './pages/login.jsx'
import { LoadingContextProvider } from './context/LoadingSkeletonContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <LoginPages />
  }
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadingContextProvider>
      <RouterProvider router={router}/>
    </LoadingContextProvider>
  </React.StrictMode>,
)
