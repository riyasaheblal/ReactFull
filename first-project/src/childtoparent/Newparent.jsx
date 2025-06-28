import React, { useState } from 'react'
import Childcomp from './Childcomp';

const Newparent = () => {
    let[message,setMessage]=useState("Good Morning");

  return (
    <>
   <h2 style={{color:'red'}}>{message}</h2>
   <Childcomp setMessage={setMessage}/>
    </>
  )
}

export default Newparent