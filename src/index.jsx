import "./Index.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error-page.jsx";
import Main from "./UI/Main";
import Women from "./UI/Women";
import Men from "./UI/Men";
import Kids from "./UI/Kids";
import Accesories from "./UI/Accesories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true, 
        element: <Main /> 
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/accesories",
        element: <Accesories />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
