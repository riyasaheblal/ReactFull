import React from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Users from './Users'
import NotFound from './NotFound'
import Mobile from './Mobile'

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}>     //parent
    <Route path='/contact/mobile' element={<Mobile/>}/>   //child 
    </Route>
    <Route path='/users' element={<Users/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  

  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='/users'>Users</Link></li>
  </ul>
  </BrowserRouter>
  )
}

export default App