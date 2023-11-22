import "./Index.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error-page.jsx";
import Home from "./UI/Home.jsx";
import Category from "./UI/Category.jsx";

const categories = ["women's clothing", "men's clothing","jewelery", "electronics"]

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
        path: "/:name",
        element: <Category />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
