import React, { useEffect, useState } from 'react'

const SideEffect = () => {
    let[count,setCount]=useState(0)
     let[number,setNumber]=useState(0)

     let incrCount=()=>setCount(count+1);
     let incrNumber=()=>setNumber(number+1)


     //!useEffect() is used to code related sideEffect
     //useEffect(callbackfun,array of dependency)

     //Empty Array
     //!useEffect() with empty array of dependency acts like ComponentDidMount()   
     //? get invoke once
    //  useEffect(()=>{
    //     console.log("Use effect got invoked");  
    //  },[])


      //Value Array
     //!useEffect() with some value  of dependency[mulitple data we can pass] acts like ComponentDidUpdate()   
     //? get invoke after update everytime
     useEffect(()=>{
        console.log("Use effect got invoked");  
     },[count])
  return (
   <>
   <h1>SideEffect</h1>
   <h2>Count:{count}</h2>
   <button onClick={incrCount}>Increment Count</button>
   <h2>Number:{number}</h2>
   <button onClick={incrNumber}>Increment Number</button>
   </>
  )
}

export default SideEffect