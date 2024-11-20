import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './auth/AuthProvider.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Oxapp from './Oxapp.jsx'
import Sign from './pages/p-access.jsx'

import './styles/global/s-global.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Oxapp />
  },
  {
    path: "/access",
    element: <Sign />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
