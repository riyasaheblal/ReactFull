import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    //! useNavigate()==> navigate from one page to anothe page
    //! store   == return a function
    let navigator=useNavigate()    

    let contact=()=>{
        //!       "path to navigate"
        navigator("/contact")
    }
  return (
   <>
   <h2>About</h2>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore nostrum, inventore fugit culpa mollitia amet optio nihil earum esse iusto exercitationem doloremque sequi enim? Veniam impedit vero expedita provident.</p>
   <button onClick={contact}>Intreseted? contact us</button>
   </>
  )
}

export default About