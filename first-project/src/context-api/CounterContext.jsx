import React, { createContext, useState } from 'react'
 

 export let ContextApi=createContext();

const CounterContext = (props) => {

  let[count,setCount]=useState(0);
  let incr=()=>setCount(count+1);
 let decr=()=>setCount(count-1);
  let reset=()=>setCount(0);


  return (
    <ContextApi.Provider value={{count,incr,decr,reset}}> 
        {props.children}
    </ContextApi.Provider>
  )
}

export default CounterContext