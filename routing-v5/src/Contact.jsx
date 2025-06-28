import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Contact = () => {
  return (
   
   //!<outlet/> ==>this should be placed inside the parent component
   //! to specfiy the exact place where the child component should display
   <>

 
   <h2>Contact</h2>
   <Link to='/contact/mobile'>Click here to get mobile number</Link>
<Outlet/>
   </>
  )
}

export default Contact