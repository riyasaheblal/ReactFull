import React, { useState } from 'react'

const ControlledForm = () => {

    //!Initialised the state
    let [email,setEmail]=useState(" ")
    let [password,setpassword]=useState("")

    //!3.state updation(onChange)
    let emailChange=(e)=>{
        setEmail(e.target.value)
    }
    let passwordChange=(e)=>{
        setpassword(e.target.value)
    }

    //!4.submit
    let handleSubmit=(e)=>{
        e.preventDefault()    //avoid refreshing whole page
        console.log(email,password);
        setEmail(" " )
        setpassword("")
       
        
    }
 //!2. pass the value attribute to the input field
  return (

    <>
    <h2>ControlledForm</h2>
    <form onSubmit={handleSubmit}>
       
    <input type="email" placeholder='Enter Email' value={email} onChange={emailChange}/><br />
    <input type="password" placeholder='Enter password' value={password} onChange={passwordChange}/><br />
    <button>Submit</button>
    </form>
    </>
  )
}

export default ControlledForm