import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import Cart from './Cart'
import Reorder from './Reorder'
import Admin from './Admin'
import AdminLogin from './AdminLogin'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/home",
            element:<Home/>
        },
        {
            path:"/profile",
            element:<Profile/>
        },
        {
            path:"/cart",
            element:<Cart/>
        },
        {
            path:"/reorder",
            element:<Reorder/>
        },
        {
            path:"/admin",
            element:<Admin/>
        },
        {
            path:"/admin/login",
            element:<AdminLogin/>
        },
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body