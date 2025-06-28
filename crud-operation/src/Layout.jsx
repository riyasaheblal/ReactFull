import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
   <Toaster/>
   <h2>CRUD OPERATION</h2>
   <ul>
    <li><Link to='/createuser'>CreateUser</Link></li>
    <li><Link to='/users'>Users</Link></li>
   </ul>

   <hr />
   <Outlet/>
   </>
  )
}

export default Layout