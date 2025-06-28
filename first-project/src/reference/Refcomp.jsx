import React, { useRef } from 'react'

const Refcomp = () => {

    //!1. create a reference varaible
    let h2ref=useRef();
    console.log(h2ref);  //{current: undefined}
    
    let pref=useRef();

    let changecss=()=>{
    h2ref.current.style.color='orange'
    pref.current.style.textDecoration='underline'
    }
  return (
   <>
    <h2 ref={h2ref} >Reference is an inbuilt object</h2>
    <p ref={pref}>I want to test for paragraph</p>
    <button onClick={changecss}>ChangesCss</button>
    </>
  )
}

export default Refcomp