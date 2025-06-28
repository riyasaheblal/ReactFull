import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import ButtonComp from './ButtonComp'

const ParentComp = () => {

    let[marks,setMarks]=useState(75)
    let[percentage,setPercent]=useState(80)

//     let IncrMarks=()=>setMarks(marks+1)
// let Incrpercentage=()=>setPercent(percentage+1)

//! useCallback() is used to memoize  a fnction
//usecallback(callbackfunc, array of dependency)

 let IncrMarks=useCallback(()=>{
setMarks(marks+1)
 },[marks])

let Incrpercentage=useCallback(()=>{
setPercent(percentage+1)
 },[percentage])
  return (
   <>
   <Title/>
   <Count count={marks} text="Marks"/>
   {/* //! <ButtonComp>{props.children}</ButtonComp> */}
   <ButtonComp Increment={IncrMarks}>Incr Marks</ButtonComp>
   <Count count={percentage} text="Percentage"/>
   <ButtonComp Increment={Incrpercentage}>Incr Percentage</ButtonComp>

   </>
  )
}

export default ParentComp