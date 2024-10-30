import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/global/global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sign from './rutes/signinup.jsx'
import Xat from './rutes/xat.jsx'
import Protected from './rutes/protected.jsx'
import { AuthProvider } from './auth/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/sign-in-up",
    element: <Sign />
  },
  {
    path: "/",
    element: <Protected />,
    children: [
      {
        path: "/oxat",
        element: <Xat />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
