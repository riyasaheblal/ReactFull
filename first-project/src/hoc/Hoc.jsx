import React, { useState } from 'react'

const Hoc = (WrappedComponent) => {
  return function comp (){
   //!resuable logic
    let[price,setPrice]=useState(20)
    let incrprice=()=>setPrice(price+20)
    return <WrappedComponent price={price} incrprice={incrprice}/>
  }
    
  
}

export default Hoc