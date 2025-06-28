import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Createuser = () => {

let navigator=useNavigate();

let[state,setState]=useState({
    fname:"",
    email:""

})
let {fname,email}=state;
let handlechange=(e)=>{
    let {name,value}=e.target
    setState({...state, [name]:value});
}


let handleSubmit=(e)=>{
    e.preventDefault()
    let payload={fname,email}   //data to be sent to the server
    axios.post("http://localhost:4000/employees",payload)
    navigator("/users")
    toast.success("User is created")
}

return (
   <>
   <h2>Create User</h2>
   <form action="" onSubmit={handleSubmit}>

    <div>
        <label htmlFor="">FirstName</label>
        <input type="text" name='fname' value={fname} onChange={handlechange} />
    </div>
    <div>
         <label htmlFor="">Email</label>
        <input type="text" name='email' value={email} onChange={handlechange} />
    </div>
    <button >CreateUSer</button>
   </form>
   
   </>
  )
}

export default Createuser