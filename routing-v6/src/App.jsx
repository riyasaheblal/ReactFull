import React from 'react'
import Layout from './Layout'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import Post from './Post' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mobile from './Mobile'
import PostNumber from './PostNumber'

const App = () => {
  const routepath = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />,
          children:[{
            path:'/contact/mobile',
            element:<Mobile/>
          }]
        },
        {
          path: '/post',
          element: <Post />,
          children:[{
            path:'/post/:num',      // :paramName==>  parameter/slug
            element:<PostNumber/>
          }]
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ])

  return( <RouterProvider router={routepath} />)
}

export default App
