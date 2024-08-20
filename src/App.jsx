import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import React from 'react'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'

const Routing = createBrowserRouter([
       {element: <Layout />, children: [
              {path: '/', element: <Home />},

       ]}
])

function App() {

  return (
       <React.StrictMode>
              <RouterProvider router={Routing}></RouterProvider>
       </React.StrictMode>
  )
}

export default App
