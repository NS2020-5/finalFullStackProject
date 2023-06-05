import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Login from './login'
import SearchBar from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: '/page2',
    element: <SearchBar/>
  },
  {
    path:'/',
    element: <Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
