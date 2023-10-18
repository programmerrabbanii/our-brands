import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import ErrorPage from './ErrorPage/ErrorPage';
import Root from './Root/Root';
import AddProduct from './Pages/AddProduct';
import AddCard from './Pages/AddCard';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,

    children:([
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/addproduct",
        element:<AddProduct></AddProduct>
      },
      {
        path:"/addcard",
        element:<AddCard></AddCard>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ])
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
