import React from 'react'
import Hoc from './Hoc'

const Team2 = (props) => {
    console.log(props);
    let{price,incrprice}=props
    
  return (
   <>
   <h2>Team2</h2>
   <h2>Rs:{price} lakh</h2>
   <button onClick={incrprice}>Team1 Button</button>
   </>
  )
}

export default Hoc(Team2)