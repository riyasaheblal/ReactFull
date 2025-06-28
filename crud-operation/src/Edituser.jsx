import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Edituser = () => {

let navigator=useNavigate();

let parameter=useParams();     //! getting data from url
console.log(parameter);
let {id}=parameter

    let[state,setState]=useState({
        fname:"",
        email:""
    
    })
    let {fname,email}=state;

    let handlechange=(e)=>{
        let {name,value}=e.target
        setState({...state, [name]:value});
    }
    
    useEffect(()=>{
        axios.get(`http://localhost:4000/employees/${id}`)
        .then((response)=>{
            console.log(response.data);    //! key data   //{fname: 'Riya', email: 'riya@gmail.com', id: '1'}
            setState(response.data)
            
        })
        
    },[])

    let handleSubmit=(e)=>{
        e.preventDefault()
        let payload=state   //update data
        axios.put(`http://localhost:4000/employees/${id}`, payload)   //! if i am using any http method then payload is mandtory
        navigator("/users")
        toast.success("Data Updated Succesfully")
    }
   
  return (
    <>
      <h2>Edit User</h2>
   <form action="" onSubmit={handleSubmit}>

    <div>
        <label htmlFor="">FirstName</label>
        <input type="text" name='fname' value={fname} onChange={handlechange} />
    </div>
    <div>
         <label htmlFor="">Email</label>
        <input type="text" name='email' value={email} onChange={handlechange} />
    </div>
    <button >EditUser</button>
   </form>
    </>
  )
}

export default Edituser