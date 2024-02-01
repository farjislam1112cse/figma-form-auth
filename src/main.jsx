import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import creatrouter
import {
  RouterProvider,
} from "react-router-dom";
import myCreatedRoutes from './Routes/Routes';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoutes} />
  </React.StrictMode>,
)
