
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
