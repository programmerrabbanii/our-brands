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
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './provider/AuthProvider';
import PrivateRouters from './private/PrivateRouters';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,

    children:([
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch('/data.json')
      },
      {
        path:"/addproduct",
        element:<AddProduct></AddProduct>
      },
      {
        path:"/addcard",
        element:<PrivateRouters><AddCard></AddCard></PrivateRouters>
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
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
