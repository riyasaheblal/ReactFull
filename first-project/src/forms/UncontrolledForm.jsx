import React, { useRef } from 'react'
//! 1] Uncontrolled Form
//uncontrolled forms will use the concept of reference


const UncontrolledForm = () => {
let emailRef=useRef() //{current:undefined}
let passRef=useRef()

    //!synthetic evenet==>e
    let handleSubmit=(e)=>{
        e.preventDefault()
        let a=emailRef.current.value
        let b=passRef.current.value
        console.log({email:a,password:b})
    }
  return (
    <>
    <h2>UncontrolledForm</h2>
    <form>
    <input type="email" placeholder='Enter Email' ref={emailRef}/><br />
    <input type="password" placeholder='Enter password' ref={passRef}/><br />
    <button onClick={handleSubmit}>Submit</button>
    </form>
   </>




  )
}

export default UncontrolledForm