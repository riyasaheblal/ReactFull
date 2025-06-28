import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
 <>
 <h2>Contact Details</h2>
 <Link to='/contact/mobile'>click here to get mobile information</Link>
 <Outlet/>
 </>
  )
}

export default Contact