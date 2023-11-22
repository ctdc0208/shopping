import "./Index.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error-page.jsx";
import Home from "./UI/Home.jsx";
import Category from "./UI/Category.jsx";
import Product from "./UI/Product.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      {
        path: "/:categories",
        element: <Category />,
      },
      {
        path: "/:categories/1",
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
