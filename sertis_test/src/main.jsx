import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import App from './App'
import Home from './pages/Home';
import Signup from './pages/signup';
import Confirm from './pages/confirm';
import Edit from './pages/edit';
import Status from './pages/status';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/confirm",
    element: <Confirm />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
  {
    path: "/status",
    element: <Status />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
