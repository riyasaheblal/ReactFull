import React, { useState } from 'react'

export const Counterapp = () => {

    let[count,setCount]=useState(0);
    let inc=()=>{
        setCount(count+1)
    }
     let dec=()=>{
        // should not decrese by 0
        if(count>0){
         setCount(count-1)
        }
     }
      let res=()=>{
         setCount(0)
      }
  return (
    <>
    <h1>Counter App</h1>
    <h2>count:{count}</h2>
    <button onClick={inc}>Increment</button>
     <button onClick={dec}>Decrement</button>
      <button onClick={res}>Reset</button>
    </>
  )
}
