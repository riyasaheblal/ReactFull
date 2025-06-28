import React, { useContext } from 'react'
import { ContextApi } from './CounterContext';
const Counter = () => {
    let data=useContext(ContextApi);
    console.log(data);
   let{count,incr,decr,reset}=data
    
  return (
    <>
    <h2>Counter List</h2>
     <h2>Counter: {count}</h2>
    <button onClick={incr}>Increment</button>
    <button onClick={decr}>Decrement</button>
    <button onClick={reset}>Reset</button> 
    </>
  )
}

export default Counter