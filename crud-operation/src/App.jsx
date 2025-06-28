import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Createuser from './Createuser'
import Edituser from './Edituser'
import User from './User'
import NotFound from './NotFound'

const App = () => {
    let crudpath=createBrowserRouter([{
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/createuser',
                element:<Createuser/>
            },
             {
                path:'/edituser/:id',
                element:<Edituser/>
            },
             {
                path:'/users',
                element:<User/>
            },
             {
                path:'*',
                element:<NotFound/>
            },
        ]
    }])
  return (
    <RouterProvider router={crudpath}></RouterProvider>
  )
}

export default App