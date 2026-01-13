import React, { lazy } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../pages/Layout'
import ErrorPage from '../pages/ErrorPage'



const Home=lazy(()=>import("../pages/Home"))
const About=lazy(()=>import("../pages/About"))
const Dashboard=lazy(()=>import("../pages/Dashboard"))
 const Router = () => {
   const routes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
          {
            path:"/home",
            element:<Home/>
          },
          {
            path:"/about",
            element:<About/>
          },
          {
            path:"/dashboard",
            element:<Dashboard/>
          }
        ],
        errorElement:<ErrorPage/>
    }
   ])
  return <RouterProvider router={routes}>

  </RouterProvider>
}

export default Router