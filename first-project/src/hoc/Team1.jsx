import React from 'react'
import Hoc from './Hoc'

const Team1 = (props) => {
    console.log(props);   //{price: 20, incrprice: ƒ}
    let{price,incrprice}=props   //destructed
    
  return (
   <>
   <h2>Team1</h2>
   <h2>Rs:{price} lakh</h2>
   <button onClick={incrprice}>Team1 Button</button>
   </>
  )
}

export default Hoc(Team1)