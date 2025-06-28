import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <h2>Home Page</h2>
    <ul>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/post'>Post</Link></li>
    </ul>
    <hr />
    <Outlet/>
    </>
  )
}

export default Layout