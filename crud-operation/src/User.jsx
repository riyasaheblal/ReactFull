import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
const User = () => {

 let[users,setUsers]=useState([])

 async function getdata(){
    // let response=await axios.get("https://")
    // console.log(response);   //return a promise {promise:undefined}
    // let {data}=response
let {data}=await axios.get("http://localhost:4000/employees");
console.log(data);
setUsers(data)    
 }


 useEffect(()=>{
getdata()
 },[])

let handledelete=(id)=>{   //id of the data to be deleted
    axios.delete(`http://localhost:4000/employees/${id}`)
    .then(()=>{
        getdata()
    })
    toast.success("Data is deleted Succesfully")
}


  return (
   <>
   <h2>Users</h2>
   <table>
   <thead>
    <tr>
        <th>First Name</th>
        <th>Email</th>
        <th>Update</th>
        <th>Delete</th>
    </tr>
   </thead>
   <tbody>
    {
        users.map((value,index)=>{
            return(
            <tr key={value.id}>
                <td>{value.fname}</td>
                <td>{value.email}</td>
                <td><Link to={`/edituser/${value.id}`}><FaUserEdit/></Link></td>
                <td><span onClick={()=>handledelete(value.id)}><MdOutlineDelete/></span></td>
            </tr>
            )
        })
    }
   </tbody>

   </table>
   
   </>
  )
}

export default User