import React, { useMemo, useState } from 'react'

const MemoComp = () => {

let[count,setCount]=useState(0)
let[number,setNumber]=useState(0)


let incrCount=()=> setCount(count+1);
let incrNum=()=> setNumber(number+1)


//! its a function
// let isEven=()=>{
// let i=0
// while(i<2000000000){
//     i++
// }
// return count%2==0  //memoize the value
// }


//! useMemo() is used to memoize a value
// useMemo(callbackfunc, array of dependency)


let isEven=useMemo(()=>{
let i=0
while(i<2000000000){
    i++
}
return count%2==0  //memoize the value
},[count])


  return (
    <>
    <button onClick={incrCount}>Count:{count}</button>
    {/* {isEven()? "Even": "odd"} <br/>  :: previously its a function*/}
     {/* //now its a value */}
    {isEven? "Even": "odd"} <br/>   
    <button onClick={incrNum}>Number:{number}</button>
    </>
  )
}

export default MemoComp