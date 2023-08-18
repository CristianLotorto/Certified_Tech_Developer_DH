import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ContextProvider from './components/utils/Provider';
import { childAppRoutes } from './routes/childAppRoutes';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    children: childAppRoutes
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ContextProvider>

    <RouterProvider router={router} />

  </ContextProvider>

)
